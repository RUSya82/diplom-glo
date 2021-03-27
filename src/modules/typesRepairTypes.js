import tabsInitListenerWithSlider from "./lib/tabsInitListenerWithSlider";

const typesRepairTypes = () => {
    const typeRepareInit = new tabsInitListenerWithSlider({
        tabItems: '.types-repair-item',
        tabsWrapper: '.repair-types-tab',
        tabButtons: '.repair-types-nav__item',
        mainSliderInitObject: {
            main: '.repair-types-slider',
            wrapper: '.types-repair',
            slidesToShow: 1,
            arrowNext: '#repair-types-arrow_right',
            arrowPrev: '#repair-types-arrow_left',
            progress: {
                useProgress: true,
                total: '.slider-counter-content__total',
                current: '.slider-counter-content__current'
            },
            preview: {
                usePreview: false,
            }
        },
        navSliderInitObject: {
            main: '.repair-types-nav',
            wrapper: '.nav-list-repair',
            slidesToShow: 3,
            arrowPrev: '.nav-arrow_left',
            arrowNext: '.nav-arrow_right',
            maxWidth: 1024,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1024,
                    slidesToShow: 3,
                },
                {
                    breakpoint: 575,
                    slidesToShow: 1,
                },
            ]
        }
    });
    typeRepareInit.init();


};
export default typesRepairTypes;
