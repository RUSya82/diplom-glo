/**
 * функция закыкрытия/открытия модального окна
 * @param popup - ссылка на модалку
 * @param handler - callback функция, которую необходимо выполнить вместе с закрытием
 */
import calcScroll from "./calcScroll";
const togglePopup = (popup, handler, ...parameters) => {
    //console.log(parameters);
    // const popupOpened = document.querySelectorAll('.popup.open');
    // if(popupOpened.length > 0){
    //     popupOpened.forEach(item => togglePopup(item));
    // }
    //
    // const toggleLockBody = () => {
    //     document.body.classList.toggle('lock');
    //     const bodyScroll = calcScroll();
    //     if(document.body.classList.contains('lock')){
    //         document.body.style.marginRight = `${bodyScroll}px`;
    //     } else {
    //         document.body.style.marginRight = `0`;
    //     }
    // }
    // popup.classList.toggle('open');
    //
    // toggleLockBody();
    //
    // if(handler){
    //     handler();
    // }

}
export default togglePopup;