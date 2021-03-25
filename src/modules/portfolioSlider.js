import SimplySlider from "./lib/simplySlider";

const portfolioSlider = () => {
    const portfolioSliderInit = new SimplySlider({
        slider: '.portfolio-slider-wrap',
        wrapper: '.portfolio-slider.mobile-hide',
        slideToShow: 3,
        arrowNext: '#portfolio-arrow_right',
        arrowPrev: '#portfolio-arrow_left',
        hideArrows: true
    });
    portfolioSliderInit.init();
    const portfolioSliderMobileInit = new SimplySlider({
        slider: '.portfolio-slider-wrap',
        wrapper: '.portfolio-slider-mobile.tablet-hide.desktop-hide',
        slideToShow: 1,
        arrowNext: '#portfolio-arrow-mobile_right',
        arrowPrev: '#portfolio-arrow-mobile_left',
        hideArrows: true,
        total: '.slider-counter-content__total',
        current: '.slider-counter-content__current',
    });
    portfolioSliderMobileInit.init();

};
export default portfolioSlider;