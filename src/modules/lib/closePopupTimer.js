import popupCLose from "./popupClose";

const closePopupTimer = (popup, time) => {
    setTimeout(popupCLose, time, popup);
};
export default closePopupTimer;