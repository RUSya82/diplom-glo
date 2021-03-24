import SliderCompany from "./lib/sliderCompany";

const  transparensySlider = () => {
    const transparensy = new SliderCompany({
        main: '.transparency-slider-wrap',
        wrapper: '.transparency-slider',
        slidesToShow: 1,
        arrowPrev: '.transparency-slider-wrap .slider-arrow_left',
        arrowNext: '.transparency-slider-wrap .slider-arrow_right',
        maxWidth: 1024,
    });
    console.log(document.querySelector('.transparency-slider-wrap .slider-arrow_left'));
};
export default transparensySlider;