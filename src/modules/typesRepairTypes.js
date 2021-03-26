import SliderCompany from "./lib/sliderCompany";

const typesRepairTypes = () => {
    const tabItems = document.querySelectorAll('.types-repair-item');
    const tabsWrapper = document.querySelector('.repair-types-tab');
    const tabButtons = document.querySelectorAll('.repair-types-nav__item');

    let sliderCompany = new SliderCompany({
        main: '.repair-types-slider',
        wrapper: '.types-repair1',
        slidesToShow: 1,
        arrowNext: '#repair-types-arrow_right',
        arrowPrev: '#repair-types-arrow_left',
        progress: {
            useProgress: true,
            total: '.slider-counter-content__total',
            current: '.slider-counter-content__current'
        }
    });



    tabsWrapper.addEventListener('click', (e) => {
        let target = e.target;
        const tabBtn = target.closest('.repair-types-nav__item');
        if(tabBtn){
            tabButtons.forEach((item, index) => {
                if(item === target){
                    tabItems[index].style.display = 'flex';
                    item.classList.add('active');
                    sliderCompany.deInit();
                    sliderCompany = new SliderCompany({
                        main: '.repair-types-slider',
                        wrapper: `.types-repair${index + 1}`,
                        slidesToShow: 1,
                        arrowNext: '#repair-types-arrow_right',
                        arrowPrev: '#repair-types-arrow_left',
                        position: 0,
                        progress: {
                            useProgress: true,
                            total: '.slider-counter-content__total',
                            current: '.slider-counter-content__current'
                        }
                    });
                    //sliderCompany.init();
                } else {
                    tabItems[index].style.display = 'none';
                    item.classList.remove('active');
                }
            });
        }
    });

};
export default typesRepairTypes;
