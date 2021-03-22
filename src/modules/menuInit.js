import togglePopup from "./togglePopup";
import scrollToElement from "./scrollToElement";
import toggleMenu from "./toggleMenu";
import popupOpen from "./popupOpen";
import popupCLose from "./popupClose";

const menuInit = () => {
    const menuIcon = document.querySelector('.menu__icon');
    const popupMenu = document.querySelector('.popup.popup-menu');
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    menuIcon.addEventListener('click', (e) => {
        popupOpen(popupMenu, toggleMenu);
    });

    /**
     * События по клику на самом меню
     */
    popupMenu.addEventListener('click', (e) => {
        const target = e.target;
        const popupMenuNavItem = target.closest('.popup-menu-nav__item');
        if (popupMenuNavItem){           //по пунктам меню
            e.preventDefault();
            const targetElementName = popupMenuNavItem.querySelector('a').getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetElementName);
            scrollToElement(targetElement, 200);//плавный скролл до него
            popupCLose(popupMenu);//закрываем меню
        }

    })


}
export default menuInit;