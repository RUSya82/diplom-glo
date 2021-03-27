import popupOpen from "./popupOpen";

/**
 * привязка модального окна к ссфлкам по которым оно должно открываться
 * @param linksSelector - селектор ссылок
 * @param modalSelector - селектор модалки
 * @param callback
 * @param ...args
 */
const bindModal = (linksSelector, modalSelector, callback, ...args) => {
    const links = document.querySelectorAll(linksSelector);
    const modal = document.querySelector(modalSelector);
    if(links.length > 0){
        links.forEach( item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupOpen(modal,callback, ...args);
            });
        })
    }
}
export default bindModal;