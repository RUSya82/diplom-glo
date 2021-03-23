class SliderCompany {
    constructor(
        {
            main = '.glo-slider',
            wrapper = 'glo-slider__wrapper',
            position = 0,
            slidesToShow = 3,
            responsive = [],
            arrowNext,
            arrowPrev,
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
        } catch (e) {
            console.error(e);
        }

    }

    init() {
        this.addGloClass();
        this.addStyle();
        if(!this.next && !this.prev){
            this.addArrows();
        }
        this.addControls();
        if (this.responsive) {
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
                        this.slideWidth = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = this.slidesToShowDefault;
                this.slideWidth = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }

    addStyle() {
        let style = document.getElementById('gloSliderStyle'+ this.rand);
        if (!style) {
            style = document.createElement('style');
            style.id = 'gloSliderStyle' + this.rand;
        }
        style.textContent = `
            .glo-slider${this.rand}{
                overflow: hidden !important;
            }
            .glo-slider__wrapper${this.rand}{
                display: flex;
                transition: transform 0.5s !important;
                will-change: transform !important;
                
            }
            .glo-slider__item${this.rand}{
                flex: 0 0 ${this.slideWidth}% !important;
                display: flex !important;;
                align-items: center !important;;
                justify-content: center !important;;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    nextSlide() {
        if (this.position + this.slidesToShow < this.slides.length) {
            this.wrapper.style.transform = `translateX(${-(++this.position * this.slideWidth)}%)`;
        }
    }

    prevSlide() {
        if (this.position > 0) {
            this.wrapper.style.transform = `translateX(-${--this.position * this.slideWidth}%)`;
        }
    }

    addArrows() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        this.prev.classList.add('glo-button__prev' + this.rand);
        this.next.classList.add('glo-button__next'+ this.rand);
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
        const style = document.createElement('style');
        style.textContent = `
            .glo-button__prev${this.rand},
            .glo-button__next${this.rand}{
                width: 40px;
                height: 40px;
                margin: 5px 20px;
                padding: 0;
                border-top: 5px solid #19b5fe;
                border-bottom: none;
                background: transparent;
            }
            .glo-button__prev${this.rand}{
                transform: rotate(-45deg);
                border-left: 5px solid #19b5fe;
                border-right: none;
            }
            .glo-button__next${this.rand}{
                transform: rotate(45deg);
                border-right: 5px solid #19b5fe;
                border-left: none;
                
            }
            .glo-button__prev${this.rand}:hover,
            .glo-button__next${this.rand}:hover,
            .glo-button__prev${this.rand}:focus,
            .glo-button__next${this.rand}:focus{
                background: transparent;
                outline: none;
            }
        `;
        document.head.appendChild(style);
    }

    addControls() {
        this.prev.addEventListener('click', this.prevSlide.bind(this));
        this.next.addEventListener('click', this.nextSlide.bind(this));
    }
    deInit(){
        this.prev.removeEventListener('click', this.prevSlide.bind(this));
        this.next.removeEventListener('click', this.nextSlide.bind(this));
        let style = document.getElementById('gloSliderStyle'+ this.rand);
        style.remove();

        this.removeGloClass();
    }
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

}

export default SliderCompany;