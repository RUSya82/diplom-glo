import SliderForButtons from "./sliderForButtons";
import SliderCompany from "./sliderCompany";

class tabsInitListenerWithSlider {
    constructor({
                    tabItems,
                    tabsWrapper,
                    tabButtons,
                    textBlocks = false,
                    mainSliderInitObject = {},
                    navSliderInitObject ={},
                    connectionBlock = '',
                    connectionObject = null,
                }) {
        this.tabItems = document.querySelectorAll(tabItems);
        this.tabsWrapper = document.querySelector(tabsWrapper);
        this.tabButtons = document.querySelectorAll(tabButtons);
        this.textBlocks = document.querySelectorAll(textBlocks);
        this.mainSliderInitObject = mainSliderInitObject;
        this.navSliderInitObject = navSliderInitObject;
        this.tabButtonClass = tabButtons;
        this.mainSliderInitObjectWrapperClone = this.mainSliderInitObject.wrapper;
        if(connectionBlock){
            this.connectionBlock = document.querySelectorAll(connectionBlock);
        } else {
            this.connectionBlock = false;
        }
        this.connectionObject = false;

    }
    init(){
        this.initSliderButton();
        this.mainSliderInitObject.wrapper = this.mainSliderInitObjectWrapperClone + '1';
        this.initMainSlider();
        this.addListeners();
    }
    initSliderButton(){
        this.slidernav = new SliderForButtons(this.navSliderInitObject);
    }
    initMainSlider(){
        this.mainSlider = new SliderCompany(this.mainSliderInitObject);
    }
    setConnectionObject(connectionObject){
        this.connectionObject = connectionObject;
    }
    openTab(indexToOpen){
        this.tabButtons.forEach((item, index) => {
            if(index === indexToOpen){
                this.tabItems[index].style.display = 'flex';
                if(this.connectionBlock){
                    this.connectionBlock[index].style.display = 'block';
                }
                item.classList.add('active');
                this.mainSlider.deInit();
                this.mainSliderInitObject.wrapper = this.mainSliderInitObjectWrapperClone + `${index + 1}`;
                this.initMainSlider();
            } else {
                this.tabItems[index].style.display = 'none';
                if(this.connectionBlock){
                    this.connectionBlock[index].style.display = 'none';
                }
                item.classList.remove('active');
            }
        });
    }
    addListeners(){
        this.tabsWrapper.addEventListener('click', (e) => {
            let target = e.target;
            const tabBtn = target.closest(this.tabButtonClass);
            if(tabBtn){
                this.tabButtons.forEach((item, index) => {
                    if(item === target){
                        this.tabItems[index].style.display = 'flex';
                        if(this.connectionBlock){
                            this.connectionBlock[index].style.display = 'block';
                        }
                        if(this.connectionObject){
                            this.connectionObject.openTab(index);
                        }
                        item.classList.add('active');
                        this.mainSlider.deInit();
                        this.mainSliderInitObject.wrapper = this.mainSliderInitObjectWrapperClone + `${index + 1}`;
                        this.initMainSlider();
                    } else {
                        this.tabItems[index].style.display = 'none';
                        if(this.connectionBlock){
                            this.connectionBlock[index].style.display = 'none';
                        }
                        item.classList.remove('active');
                    }
                });
            }
        });
    }
}
export default tabsInitListenerWithSlider;