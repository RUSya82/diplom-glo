import tabsInitListenerWithSlider from "./lib/tabsInitListenerWithSlider";

const designTabsInit = () => {
    const designTabsObject = new tabsInitListenerWithSlider({
        tabItems:  '#designs .designs-slider__style-item',
        tabsWrapper: '#designs .nav-wrap',
        tabButtons: '#designs .designs-nav__item',
        connectionObject: designPopupSlider,
        mainSliderInitObject: {
            main: '.designs-slider',
            wrapper: '.designs-slider__style',
            slidesToShow: 1,
            arrowNext: '#design_right',
            arrowPrev: '#design_left',
            progress: {
                useProgress: true,
                total: '#designs .slider-counter-content__total',
                current: '#designs .slider-counter-content__current'
            },
            preview: {
                usePreview: true,
                previewContainer: '#designs .preview-block',
                previewItemClass: 'preview-block__item'
            }
        },
        navSliderInitObject: {
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
        }

    });

    const designPopupSlider = new tabsInitListenerWithSlider({
        tabItems: '.popup-designs-slider__style-item',
        tabsWrapper: '#nav-list-popup-designs',
        tabButtons: '.designs-nav__item.designs-nav__item_popup',
        connectionBlock: '.popup-design-text',
        mainSliderInitObject: {
            main: '.popup-design-slider',
            wrapper: '.popup-designs-slider__style',
            slidesToShow: 1,
            arrowNext: '#popup_design_right',
            arrowPrev: '#popup_design_left',
            progress: {
                useProgress: true,
                total: '#popup-designs-counter .slider-counter-content__total',
                current: '#popup-designs-counter .slider-counter-content__current'
            },
            preview: {
                usePreview: false,
            }
        },
        navSliderInitObject: {
            main: '.popup-design .nav-designs',
            wrapper: '#nav-list-popup-designs',
            slidesToShow: 3,
            arrowPrev: '#nav-arrow-popup-designs_left',
            arrowNext: '#nav-arrow-popup-designs_right',
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
        }

    });
    designTabsObject.init();
    designPopupSlider.init();
    // связываем табы
    designTabsObject.setConnectionObject(designPopupSlider);
    designPopupSlider.setConnectionObject(designTabsObject);
};
export default designTabsInit;