import SliderCompany from "./lib/sliderCompany";

const transparencyPopupSlider = () => {
    const slider = document.querySelector('.popup-transparency-slider');
    const wrap = document.querySelector('.popup-transparency-slider-wrap');
    const slides = document.querySelectorAll('.popup-transparency-slider__slide');
    const arrowNext = document.getElementById('transparency_right');
    const arrowPrev = document.getElementById('transparency_left');
    const total = wrap.querySelector('.slider-counter-content__total');
    const current = wrap.querySelector('.slider-counter-content__current');
    let currentSlide = 0;

    console.log(total)
    console.log(current)
    slides[currentSlide].classList.add('active');
    total.textContent = `${slides.length}`;
    current.textContent = `${currentSlide + 1}`;
    /**
     * проверка номера текущего слайда, если что не так, корректирует
     */
    const checkSlideNumber = () => {
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
    };

    /**
     * Переход на следующий слайд
     * @param next - если true, то следующий, false - предыдущий
     */
    const clickNextSlide = (next = true) => {
        slides[currentSlide].classList.remove('active');
        if (next) {
            currentSlide++;
        } else {
            currentSlide--;
        }
        checkSlideNumber();
        slides[currentSlide].classList.add('active');
    };

    arrowNext.addEventListener('click', (e) => {
        clickNextSlide(true);
        current.textContent = `${currentSlide + 1}`;
    });
    arrowPrev.addEventListener('click', (e) => {
        clickNextSlide(false);
        current.textContent = `${currentSlide + 1}`;
    })
};
export default transparencyPopupSlider;