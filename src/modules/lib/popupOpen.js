import popupCLose from "./popupClose";
import toggleLockBody from "../toggleLockBody";

const popupOpen = (popup, callback, ...args) => {
    console.log()
    const popupOpened = document.querySelectorAll('.popup.open');
    if(popupOpened.length > 0){
        popupOpened.forEach(item => popupCLose(item));
    }
    popup.classList.toggle('open');

    toggleLockBody();

    if(callback){
        callback(...args);
    }
};
export default popupOpen;