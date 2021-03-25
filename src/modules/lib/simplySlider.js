
class SimplySlider {
    constructor({
                    slider,
                    wrapper,
                    arrowNext,
                    arrowPrev,
                    total = false,
                    current = false,
                    slideToShow = 1,
                    hideArrows = false
                }) {
        this.slider = document.querySelector(slider);
        this.wrapper = document.querySelector(wrapper);
        this.slides = [...document.querySelector(wrapper).children];
        this.arrowNext = document.querySelector(arrowNext);
        this.arrowPrev = document.querySelector(arrowPrev);
        this.hideArrows = hideArrows;
        if(total){
            this.total = this.slider.querySelector(total);
        }
        if(current){
            this.current = this.slider.querySelector(current);
            console.log(this.current)
        }

        this.currentSlide = 0;
        this.slideToShow = slideToShow;
    }

    init(){
        this.slides.forEach((item, index) => {
            if(index < this.slideToShow){
                this.slides[index].classList.add('active');
            }
        });
        this.writeTotal();
        this.addListeners();
        if(!this.checkPrevSlide()){
            this.hidePrevArrow();
        }
        if(!this.checkNextSlide()){
            this.hideNextArrow();
        }
        this.arrowPrev.style.zIndex = '10000';
        this.arrowNext.style.zIndex = '10000';
    }
    writeTotal(){
        if(this.total){
            this.total.textContent = `${this.slides.length}`;
        }
        if(this.current){

            this.current.textContent = `${this.currentSlide + 1}`;
        }
    }


    /**
     * проверка номера текущего слайда, если что не так, корректирует
     */
    checkSlideNumber () {
        if (this.currentSlide < 0) {
            this.currentSlide = this.slides.length - 1;
        } else if (this.currentSlide >= this.slides.length) {
            this.currentSlide = 0;
        }
    };
    checkNextSlide(){
        return this.currentSlide + this.slideToShow < this.slides.length;
    }
    checkPrevSlide(){
        return this.currentSlide > 0;
    }
    hideNextArrow(){
        if(this.hideArrows){
            this.arrowNext.style.opacity = '0';
        }
    }
    hidePrevArrow(){
        if(this.hideArrows){
            this.arrowPrev.style.opacity = '0';
        }
    }
    showNextArrow(){
        this.arrowNext.style.opacity = '1';
    }
    showPrevArrow(){
        this.arrowPrev.style.opacity = '1';
    }

    nextSlide(){

        if(this.checkNextSlide()){
            this.slides[this.currentSlide].classList.remove('active');
            ++this.currentSlide;
            this.slides[this.currentSlide + this.slideToShow - 1].classList.add('active');
            if(!this.checkNextSlide()){
                this.hideNextArrow();
            }
            this.showPrevArrow();
            this.writeTotal();
        }

    }
    prevSlide(){
        if(this.checkPrevSlide()){
            this.slides[this.currentSlide+ this.slideToShow - 1].classList.remove('active');
            --this.currentSlide;
            this.checkSlideNumber();
            this.slides[this.currentSlide].classList.add('active');
            if(!this.checkPrevSlide()){
                this.hidePrevArrow();
            }
            this.showNextArrow();
            this.writeTotal();
        }
    }

    addListeners(){
        this.arrowNext.addEventListener('click', (e) => {
            this.nextSlide();
            this.writeTotal();

        });
        this.arrowPrev.addEventListener('click', (e) => {
            this.prevSlide();
            this.writeTotal();
        })
    }

};
export default SimplySlider;