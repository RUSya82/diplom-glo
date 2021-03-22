import popupCLose from "./popupClose";
import toggleLockBody from "./toggleLockBody";
import toggleMenu from "./toggleMenu";

const popupOpen = (popup, callback) => {
    const popupOpened = document.querySelectorAll('.popup.open');
    if(popupOpened.length > 0){
        popupOpened.forEach(item => popupCLose(item));
    }
    popup.classList.toggle('open');

    toggleLockBody();

    if(callback){
        callback();
    }
};
export default popupOpen;