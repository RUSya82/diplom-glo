import toggleLockBody from "./toggleLockBody";
import toggleMenu from "./toggleMenu";
const popupCLose = (popup, callback) => {
    const activeMenu = document.querySelector('.popup-dialog-menu.active');
    if(activeMenu){
        toggleMenu();
    }
    popup.classList.toggle('open');
    toggleLockBody();

    if(callback){
        callback();
    }
};
export default popupCLose;