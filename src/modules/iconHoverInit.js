//'.formula-item__icon'
//'.formula-item'
//'.formula-item-popup'
const iconHoverInit = ({
            icon,
            item,
            popup
                       }) => {
    const icons = document.querySelectorAll(icon);
    const items = document.querySelectorAll(item);

    const showIconPopup = (e) => {
        const element = e.target;
        const parent = element.closest(item);
        let iconPopup = element.querySelector(popup);
        const top = iconPopup.getBoundingClientRect().top;
        const bottom = iconPopup.getBoundingClientRect().bottom;
        parent.style.opacity = '1';
        if(top < 0 || bottom > document.documentElement.clientHeight){
            iconPopup.classList.add('popup-reverted');
        }
        parent.classList.add('active-item');
        parent.style.zIndex = '111';
        iconPopup.style.zIndex = '111';
    }
    const closeIconPopup = (e) => {
        const element = e.target;
        const iconPopup = element.querySelectorAll(popup);
        const parent = element.closest(item);
        iconPopup.forEach(item => {
            if(item.classList.contains('popup-reverted')){
                item.classList.remove('popup-reverted');
            }
        });
        items.forEach(item => {
            if(item.classList.contains('active-item')){
                item.classList.remove('active-item');
            }
        });
        parent.style.opacity = '0.4'

    }
    icons.forEach((item) => {
        item.addEventListener('mouseenter', showIconPopup);
    });

    icons.forEach((item) => {
            item.addEventListener('mouseleave', closeIconPopup);
    });

};
export default iconHoverInit;
