
const shemeButtonSliderInit = () => {
    const tabItems = document.querySelectorAll('.scheme-slider__slide');
    const tabsWrapper = document.querySelector('.sheme-button-slider');
    const tabButtons = document.querySelectorAll('.scheme-nav__item');
    const descriptionBlocks = document.querySelectorAll('.scheme-description-block');

    tabsWrapper.addEventListener('click', (e) => {
        let target = e.target;
        const tabBtn = target.closest('.scheme-nav__item');
        if(tabBtn){
            tabButtons.forEach((item, index) => {
                if(item === target){
                    tabItems[index].style.display = 'block';
                    descriptionBlocks[index].classList.add('visible-content-block');
                    item.classList.add('active');
                } else {
                    tabItems[index].style.display = 'none';
                    descriptionBlocks[index].classList.remove('visible-content-block');
                    item.classList.remove('active');
                }
            });
        }
    });


};
export default shemeButtonSliderInit;