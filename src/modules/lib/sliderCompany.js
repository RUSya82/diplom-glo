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
            progress = {
                useProgress: false
            },
            maxWidth = false,
            addStyleDefault = true,
            useOverflow = true,
            infinity = false,
            preview = {
                usePreview: false,
                previewContainer: '',
                previewItemClass: ''
            }

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
            this.progress = progress;
            this.psThis = this.prevSlide.bind(this);
            this.nxThis = this.nextSlide.bind(this);
            this.previewListenerBind = this.previewListenerFunction.bind(this);
            this.maxWidth = maxWidth;
            this.addStyleDefault = addStyleDefault;
            this.useOverflow = useOverflow;
            this.preview = preview;
            this.infinity = infinity;
            if(this.maxWidth){
                const windowWidth = document.documentElement.clientWidth;
                if(windowWidth < this.maxWidth){
                    this.init();
                }
                window.addEventListener('resize', () => {
                    const windowWidth = document.documentElement.clientWidth;
                    if(windowWidth < this.maxWidth){
                        this.init();
                    } else {
                        this.deInit();
                    }
                });
            }else {
                this.init();
            }


        } catch (e) {
            console.error(e);
        }

    }

    init() {
        this.addGloClass();

        if(this.addStyleDefault){
            this.addStyle();
        }

        if(!this.next && !this.prev){
            this.addArrows();
        }
        if(this.preview.usePreview){
            this.previewContainer = document.querySelector(this.preview.previewContainer);
            this.renderPreview();
        }
        this.addControls();
        if (this.responsive.length !== 0) {
            this.responsiveInit();
        }
        if(this.progress.useProgress){
            this.totalField = document.querySelector(this.progress.total);
            this.currentField = document.querySelector(this.progress.current);
            if(!this.totalField || !this.currentField){
                this.progress.useProgress = false;
            } else {
                this.setTotalField();
                this.setCurrentField();
            }
        }

        this.goToPosition(0);

    }
    //preview-block__item-inner scand preview_active
    renderPreview(){
        this.previewContainer.innerHTML = '';
        try{
            this.slides.forEach((item, index) => {
                const imgSrc = item.querySelector('img').getAttribute('src');
                const itemAppend = `<div class="${this.preview.previewItemClass}" data-index="${index}">
                                        <div class="preview-block__item-inner scand ${this.position === index ? 'preview_active' : ''}">Интерьер ${index}</div>
                                        <img src="${imgSrc}" alt="" style="width: 100%; height: 100%">
                                    </div>`;
                this.previewContainer.insertAdjacentHTML('beforeend', itemAppend);
            })
        }catch (e) {
            console.error(e);
        }
    }

    setCurrentField(){
        this.currentField.innerText = `${this.position + 1}`;
    }
    setTotalField(){
        this.totalField.innerText = this.slides.length;
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
        let styleString = '';
        if(this.useOverflow){
            styleString += `
            .glo-slider${this.rand}{
                overflow: hidden;
            }
            `
        }
        styleString += `
            .glo-slider__wrapper${this.rand}{
                display: flex;
                flex-wrap: nowrap;
                transition: transform 0.5s !important;
                will-change: transform !important;

            }
            .glo-slider__item${this.rand}{
                flex: 0 0 ${this.slideWidth}% !important;
                display: flex !important;;
                align-items: center !important;;
                justify-content: center ;
                
            }
        `
        style.textContent = styleString;
        document.head.appendChild(style);
    }

    goToPosition(position){
        if(position >= 0 && position < this.slides.length){
            if(position > this.position){
                this.position = position - 1;
                this.nextSlide();
            } else if( position <  this.position){
                this.position = position + 1;
                this.prevSlide();
            }
        }

    }

    nextSlide() {
        if (this.position + this.slidesToShow < this.slides.length) {
            this.wrapper.style.transform = `translateX(${-(++this.position * this.slideWidth)}%)`;
            if(this.progress.useProgress){
                this.setCurrentField();
            }
        } else {
            if(this.infinity){
                this.goToPosition(0);
            }
        }
    }

    prevSlide() {
        if (this.position > 0) {
            this.wrapper.style.transform = `translateX(-${--this.position * this.slideWidth}%)`;
            if(this.progress.useProgress){
                this.setCurrentField();
            }
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
        this.prev.addEventListener('click', this.psThis);
        this.next.addEventListener('click', this.nxThis);
        if(this.preview.usePreview){
            this.previewContainer.addEventListener('click', this.previewListenerBind);
        }
    }
    previewListenerFunction(e){
        const target = e.target.closest(`.${this.preview.previewItemClass}`);
        if(target){
            const index = +target.dataset.index;
            const itemInners = document.querySelectorAll('.preview-block__item-inner');
            itemInners.forEach(item => {
                if(item.classList.contains('preview_active')) {
                    item.classList.remove('preview_active');
                }
            });
            const itemInner = target.querySelector('.preview-block__item-inner');
            itemInner.classList.add('preview_active');
            this.goToPosition(index);
        }
    }

    deInit(){
        this.prev.removeEventListener('click', this.psThis);
        this.next.removeEventListener('click', this.nxThis);
        if(this.preview.usePreview){
            this.previewContainer.removeEventListener('click', this.previewListenerBind);
        }
        this.goToPosition(0);
        let style = document.getElementById('gloSliderStyle'+ this.rand);
        if(style){
            style.remove();
        }

        this.removeGloClass();
    }
    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

}

export default SliderCompany;