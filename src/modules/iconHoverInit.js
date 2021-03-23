const iconHoverInit = () => {
    const icons = document.querySelectorAll('.formula-item__icon');

    const showIconPopup = (e) => {
        const element = e.target;
        let iconPopup = element.querySelector('.formula-item-popup');
        const iconInner = element.querySelector('.formula-item__icon-inner');
        iconInner.style.opacity = '1';
        const popupHeight = parseInt(getComputedStyle(iconPopup).height);
        const top = element.getBoundingClientRect().top;
        if(top < popupHeight){
            iconPopup.classList.add('formula-item-popup__reverted');
        }
        iconPopup.classList.add('active');
    }
    const closeIconPopup = (e) => {
        const element = e.target;
        const iconPopup = element.querySelectorAll('.formula-item-popup');
        const iconInner = element.querySelector('.formula-item__icon-inner');
        iconInner.style.opacity = '';
        iconPopup.forEach(item => {
            if(item.classList.contains('formula-item-popup__reverted')){
                item.classList.remove('formula-item-popup__reverted');
            }
            if(item.classList.contains('active')){
                item.classList.remove('active');
            }
            //item.style.cssText = ``;
        });

    }
    icons.forEach((item) => {
        item.addEventListener('mouseenter', showIconPopup);
    });
    icons.forEach((item) => {
        item.addEventListener('mouseleave', closeIconPopup);
    });
};
export default iconHoverInit;
