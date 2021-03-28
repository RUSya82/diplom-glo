const iconHoverInit = ({
                           icon,
                           item,
                           popup,
                           arrowNextSelector,
                           arrowPrevSelector
                       }) => {
    const icons = document.querySelectorAll(icon);
    const items = document.querySelectorAll(item);
    const arrowNext = document.querySelector(arrowNextSelector);
    const arrowPrev = document.querySelector(arrowPrevSelector);

    arrowNext.addEventListener('click', (e) => {
        const current = document.querySelector(item + '.active-item');
        let nextIndex = 0;
        items.forEach((item, index) => {
            if (item.classList.contains('active-item')) {
                item.classList.remove('active-item');
            }

            if (item === current) {
                nextIndex = index + 1;
                if(nextIndex > items.length - 1){
                    nextIndex = items.length - 1;
                }
            }
        });
        if(!items[nextIndex].classList.contains('active-item')){
            items[nextIndex].classList.add('active-item');
        }

    });
    arrowPrev.addEventListener('click', (e) => {
        const current = document.querySelector(item + '.active-item');
        let nextIndex = 0;
        items.forEach((item, index) => {
            if (item.classList.contains('active-item')) {
                item.classList.remove('active-item');
            }

            if (item === current) {
                nextIndex = index - 1;
                if(nextIndex < 0){
                    nextIndex = 0;
                }
            }
        });
        if(!items[nextIndex].classList.contains('active-item')){
            items[nextIndex].classList.add('active-item');
        }
    });



    const showIconPopup = (e) => {
        const element = e.target;
        const parent = element.closest(item);
        let iconPopup = element.querySelector(popup);
        const top = iconPopup.getBoundingClientRect().top;
        const bottom = iconPopup.getBoundingClientRect().bottom;
        items.forEach(item => {
            if(item.classList.contains('active-item')){
                item.classList.remove('active-item');
            }
        });
        parent.style.opacity = '1';
        const width = document.documentElement.clientWidth;
        if(top < 0 || bottom > document.documentElement.clientHeight){
            if(width > 1024){
                iconPopup.classList.add('popup-reverted');
            }

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
    const toggleIconPopup = (e) => {
        const element = e.target;
        const iconPopup = element.querySelectorAll(popup);
        const parent = element.closest(item);
        if(parent.classList.contains('active-item')){
            closeIconPopup(e);
        } else {
            showIconPopup(e);
        }
    };
    icons.forEach((item) => {
        item.addEventListener('mouseenter', toggleIconPopup);
    });

    icons.forEach((item) => {
            item.addEventListener('mouseleave', closeIconPopup);
    });

};
export default iconHoverInit;
