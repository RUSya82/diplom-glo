import popupCLose from "./popupClose";

/**
 * Добавление событий клика/клавиш по документу (делегирование)
 */
const documentListener = () => {
    document.addEventListener('click', (e) => {
        const target = e.target;                //куда кликнули
        // console.log(target)
        const popup = target.closest('.popup');
        if (popup) {
            const popupContent = target.closest('.popup-content');
            if (!popupContent) {
                popupCLose(popup);
            } else {
                const closeBtn = target.closest('.close');
                if(closeBtn){
                    popupCLose(closeBtn.closest('.popup'));
                }
            }
        }

    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const activePopup = document.querySelector('.popup.open');
            if (activePopup) {
                popupCLose(activePopup);
            }
        }
    });
}
export default documentListener;