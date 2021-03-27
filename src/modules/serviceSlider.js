import SimplySlider from "./lib/simplySlider";

const serviceSlider = () => {
    const serviceSlider = new SimplySlider({
        slider: '.services',
        wrapper: '.services-slider',
        arrowNext: '#services-arrow_right',
        arrowPrev: '#services-arrow_left',
        slideToShow: 1,
    });
    serviceSlider.init();
};
export default serviceSlider;