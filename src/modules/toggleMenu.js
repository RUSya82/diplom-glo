import togglePopup from "./togglePopup";
import scrollToElement from "./scrollToElement";
const toggleMenu = () => {
    const icon = document.querySelector('.menu__icon');
    const popupMenu = document.querySelector('.popup.popup-menu');
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    const menuHandler = () => {
        popupDialogMenu.classList.toggle('active');
    };
    popupMenu.addEventListener('click', (e) => {
        let target = e.target;

        if(target.matches('.close-menu')){
            togglePopup(popupMenu, menuHandler);
        } else if (target.matches('.menu-link')){
            e.preventDefault();
            let targetElementName = target.getAttribute('href').slice(1);
            let targetElement = document.getElementById(targetElementName);
            scrollToElement(targetElement, 200);//плавный скролл до него
            togglePopup(popupMenu, menuHandler);//закрываем меню
        } else if(!target.closest('.popup-dialog-menu')){
            togglePopup(popupMenu, menuHandler);
        }

        console.log(target)
    })

    icon.addEventListener('click', (e) => {
        togglePopup(popupMenu, menuHandler);
    });
}
export default toggleMenu;