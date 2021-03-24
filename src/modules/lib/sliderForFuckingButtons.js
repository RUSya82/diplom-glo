class SliderForFuckingButtons {
    constructor(
        {
            main = '.glo-slider',
            wrapper = 'glo-slider__wrapper',
            position = 0,
            slidesToShow = 3,
            responsive = [],
            arrowNext,
            arrowPrev,
            maxWidth = false,
            addStyleDefault = true,
            variableWidth = false

        }) {
        try {
            this.main = document.querySelector(main);
            this.wrapper = document.querySelector(wrapper);
            if (!this.main || !this.wrapper) {
                throw 'Not any sliders!';
            }
            this.slides = [...document.querySelector(wrapper).children];
            this.position = position;
            this.slidesToShow = slidesToShow;
            this.slidesToShowDefault = slidesToShow;
            this.responsive = responsive;
            this.slideWidth = Math.floor(100 / this.slidesToShow);
            this.next = document.querySelector(arrowNext);
            this.prev = document.querySelector(arrowPrev);
            this.rand = this.randomInteger(100, 10000);
            this.psThis = this.prevSlide.bind(this);
            this.nxThis = this.nextSlide.bind(this);
            this.maxWidth = maxWidth;
            this.addStyleDefault = addStyleDefault;
            this.variableWidth = variableWidth;
            this.currentScroll = 0;
            this.init();
        } catch (e) {
            console.error(e);
        }

    }

    init() {
        this.addGloClass();
        this.addControls();
        if (this.responsive.length !== 0) {
            this.responsiveInit();
        }
    }


    addGloClass() {
        this.main.classList.add('glo-slider' + this.rand);
        this.wrapper.classList.add('glo-slider__wrapper' + this.rand);
        for (const item of this.slides) {
            item.classList.add('glo-slider__item' + this.rand);
        }
    }
    removeGloClass() {
        this.main.classList.remove('glo-slider' + this.rand);
        this.wrapper.classList.remove('glo-slider__wrapper' + this.rand);
        for (const item of this.slides) {
            item.classList.remove('glo-slider__item' + this.rand);
        }
    }

    responsiveInit() {
        const allResponse = new Map();
        this.responsive.forEach(item => {
            allResponse.set(item.breakpoint, item.slidesToShow);
        });
        const maxResponse = Math.max(...allResponse.keys());
        const checkResponse = () => {
            const windowWidth = document.documentElement.clientWidth;
            if (windowWidth < maxResponse) {
                for (let resp of allResponse.keys()) {
                    if (windowWidth < resp) {
                        this.slidesToShow = allResponse.get(resp);
                        this.wrapper.style.transform = `translateX(0)`;
                        this.position = 0;
                        this.currentScroll = 0;
                    }
                }
            } else {
                this.slidesToShow = this.slidesToShowDefault;
                this.wrapper.style.transform = `translateX(0)`;
                this.position = 0;
                this.currentScroll = 0;
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
    getOffsetLastSlide(){
        const mainWidth = parseInt(getComputedStyle(this.main).width);
        const lastElementWidth = parseInt(getComputedStyle(this.slides[this.slides.length -1]).width);
        const offsetMain =  this.main.getBoundingClientRect().left;
        const offsetElement =  this.slides[this.slides.length -1].getBoundingClientRect().left;
        return mainWidth + offsetMain - offsetElement - lastElementWidth;
    }
    nextSlide() {
        if (this.position + this.slidesToShow < this.slides.length) {
            ++this.position;
            if(this.variableWidth){
                let a = this.main.getBoundingClientRect().left;
                let c = this.slides[this.position].getBoundingClientRect().left;
                let scroll = c - a + this.currentScroll;
                this.wrapper.style.transform = `translateX(${-(scroll)}px)`;
                this.currentScroll = scroll;
            }
        } else if (this.getOffsetLastSlide() < 0){
            const scroll = this.currentScroll + Math.abs(this.getOffsetLastSlide());
            this.wrapper.style.transform = `translateX(${-(scroll)}px)`;
        }
    }

    prevSlide() {
        if (this.position > 0) {
            --this.position;
                let b = this.wrapper.getBoundingClientRect().left;
                let c = this.slides[this.position].getBoundingClientRect().left;
                let scroll = Math.abs(b) - Math.abs(c);
                this.wrapper.style.transform = `translateX(${-scroll}px)`;
                this.currentScroll = scroll;
        }
    }

    addControls() {
        this.prev.addEventListener('click', this.psThis);
        this.next.addEventListener('click', this.nxThis);
    }
    deInit(){
        this.prev.removeEventListener('click', this.psThis);
        this.next.removeEventListener('click', this.nxThis);
        this.wrapper.style.transform = `translateX(0)`;
        this.removeGloClass();
    }
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}

export default SliderForFuckingButtons;