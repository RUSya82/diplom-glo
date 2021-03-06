import scrollToElement from "./lib/scrollToElement";
import toggleMenu from "./toggleMenu";
import popupOpen from "./lib/popupOpen";
import popupCLose from "./lib/popupClose";

const menuInit = () => {
    const menuIcons = document.querySelectorAll('.menu__icon');
    const popupMenu = document.querySelector('.popup.popup-menu');
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    menuIcons.forEach(item => {
        item.addEventListener('click', (e) => {
            popupOpen(popupMenu, toggleMenu);
        });
    })


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