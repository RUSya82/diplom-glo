const iconHoverInit = () => {
    const icons = document.querySelectorAll('.formula-item__icon');

    const showIconPopup = (e) => {
        const element = e.target;
        let iconPopup = element.querySelector('.formula-item-popup');
        const popupHeight = parseInt(getComputedStyle(iconPopup).height);
        const top = element.getBoundingClientRect().top;
        if(top < popupHeight){
            iconPopup.classList.add('formula-item-popup__reverted');
        }
        iconPopup.style.cssText = `
            visibility: visible;
            opacity: 1;
        `;
    }
    const closeIconPopup = (e) => {
        const element = e.target;
        const iconPopup = element.querySelectorAll('.formula-item-popup');
        iconPopup.forEach(item => {
            if(item.classList.contains('formula-item-popup__reverted')){
                item.classList.remove('formula-item-popup__reverted');
            }
            item.style.cssText = ``;
        })

    }
    icons.forEach((item) => {
        item.addEventListener('mouseenter', showIconPopup);
    });
    icons.forEach((item) => {
        item.addEventListener('mouseleave', closeIconPopup);
    });
};
export default iconHoverInit;
