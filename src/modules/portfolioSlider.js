import SimplySlider from "./lib/simplySlider";
import popupOpen from "./popupOpen";

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
    const portfolioSliderPopupInit = new SimplySlider({
        slider: '.popup-portfolio-slider-wrap',
        wrapper: '.popup-portfolio-slider',
        slideToShow: 1,
        arrowNext: '#popup_portfolio_right',
        arrowPrev: '#popup_portfolio_left',
        hideArrows: true,
        total: '.slider-counter-content__total',
        current: '.slider-counter-content__current',
        connectionElements: '.popup-portfolio-connection',
    });
    portfolioSliderPopupInit.init();

    const portfolioSlider = document.querySelector('.portfolio-slider-wrap');
    const popupModal = document.querySelector('.popup-portfolio');
    portfolioSlider.addEventListener('click', (e) => {
       const target = e.target.closest('.portfolio-popup-link');
       if(target){
           popupOpen(popupModal);
       }
    });
};
export default portfolioSlider;