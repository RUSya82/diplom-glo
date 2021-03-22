import togglePopup from "./togglePopup";
import scrollToElement from "./scrollToElement";
import toggleMenu from "./toggleMenu";

const menuInit = () => {
    const icon = document.querySelector('.menu__icon');
    const popupMenu = document.querySelector('.popup.popup-menu');
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    popupMenu.addEventListener('click', (e) => {
        let target = e.target;

        if(target.matches('.close-menu')){
            togglePopup(popupMenu, toggleMenu);
        } else if (target.matches('.menu-link')){
            e.preventDefault();
            let targetElementName = target.getAttribute('href').slice(1);
            let targetElement = document.getElementById(targetElementName);
            scrollToElement(targetElement, 200);//плавный скролл до него
            togglePopup(popupMenu, toggleMenu);//закрываем меню
        } else if(!target.closest('.popup-dialog-menu') && popupDialogMenu.classList.contains('active')){
            togglePopup(popupMenu, toggleMenu);
        }

        console.log(target)
    })

    icon.addEventListener('click', (e) => {
        togglePopup(popupMenu, toggleMenu);
    });
}
export default menuInit;