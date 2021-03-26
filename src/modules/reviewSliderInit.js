import SimplySlider from "./lib/simplySlider";

const reviewsSliderInit = () => {
    const reviewsSlider = new SimplySlider({
        slider: '.reviews-slider-wrap',
        wrapper: '.reviews-slider',
        slidesToShow: 1,
        arrowPrev: '#reviews-arrow_left',
        arrowNext: '#reviews-arrow_right',
        hideArrows: true
    });
    reviewsSlider.init();
}
export default reviewsSliderInit;
