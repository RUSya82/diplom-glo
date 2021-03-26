import SliderForButtons from "./lib/sliderForButtons";
import SliderCompany from "./lib/sliderCompany";

const designTabsInit = () => {
    const tabItems = document.querySelectorAll('#designs .designs-slider__style-item');
    const tabsWrapper = document.querySelector('#designs .nav-wrap');
    const tabButtons = document.querySelectorAll('#designs .designs-nav__item');



    let sliderDesign = new SliderCompany({
        main: '.designs-slider',
        wrapper: '.designs-slider__style1',
        slidesToShow: 1,
        arrowNext: '#design_right',
        arrowPrev: '#design_left',
        progress: {
            useProgress: true,
            total: '#designs .slider-counter-content__total',
            current: '#designs .slider-counter-content__current'
        }
    });

    tabsWrapper.addEventListener('click', (e) => {
        let target = e.target;
        const tabBtn = target.closest('.designs-nav__item');
        if(tabBtn){
            tabButtons.forEach((item, index) => {
                if(item === target){
                    tabItems[index].style.display = 'flex';
                    item.classList.add('active');
                    sliderDesign.deInit();
                    sliderDesign = new SliderCompany({
                        main: '.designs-slider',
                        wrapper: `.designs-slider__style${index + 1}`,
                        slidesToShow: 1,
                        arrowNext: '#design_right',
                        arrowPrev: '#design_left',
                        progress: {
                            useProgress: true,
                            total: '#designs .slider-counter-content__total',
                            current: '#designs .slider-counter-content__current'
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

    const navDesignsTabs = new SliderForButtons({
        main: '.nav.nav-designs',
        wrapper: '.nav-list.nav-list-designs',
        slidesToShow: 3,
        arrowPrev: '#nav-arrow-designs_left',
        arrowNext: '#nav-arrow-designs_right',
        maxWidth: 1135,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1135,
                slidesToShow: 3,
            },
            {
                breakpoint: 575,
                slidesToShow: 1,
            },
        ]
    });
};
export default designTabsInit;