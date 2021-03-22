import togglePopup from "./togglePopup";
import toggleMenu from "./toggleMenu";

/**
 * Добавление событий клика по документу (делегирование)
 */
const documentListener = () => {

    document.addEventListener('click', (e) => {
        const target = e.target;                //куда кликнули
        console.log(target)
    });
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape') {
            const activePopup = document.querySelector('.popup.open');
            const activeMenu = document.querySelector('.popup-dialog-menu.active');
            if(activePopup && activeMenu){
                togglePopup(activePopup, toggleMenu);
            } else {
                togglePopup(activePopup);
            }
        }
    });
}
export default documentListener;