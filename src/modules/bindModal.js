import popupOpen from "./popupOpen";

/**
 * привязка модального окна к ссфлкам по которым оно должно открываться
 * @param linksSelector - селектор ссылок
 * @param modalSelector - селектор модалки
 */
const bindModal = (linksSelector, modalSelector) => {
    const links = document.querySelectorAll(linksSelector);
    const modal = document.querySelector(modalSelector);
    if(links.length > 0){
        links.forEach( item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                popupOpen(modal);
            });
        })
    }
}
export default bindModal;