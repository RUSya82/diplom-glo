/**
 * функция закыкрытия/открытия модального окна
 * @param popup - ссылка на модалку
 * @param handler - callback функция, которую необходимо выполнить вместе с закрытием
 */
const togglePopup = (popup, handler) => {
    popup.classList.toggle('open');
    if(handler){
        handler();
    }
}
export default togglePopup;