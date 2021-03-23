import showPhone from "./modules/showPhone";
import documentListener from "./modules/documentListener";
import buttonUp from "./modules/buttonUp";
import menuInit from "./modules/menuInit";
import maskPhone from "./modules/lib/maskPhone";
import bindModal from "./modules/bindModal";
import SliderCompany from "./modules/lib/sliderCompany";
import formListener from "./modules/formListener";


showPhone();
menuInit();
documentListener();
buttonUp();
maskPhone('input[name=phone]');
bindModal('.link-privacy', '.popup-privacy');
bindModal('.link-list', '.popup-repair-types');
bindModal('.button_wide', '.popup-consultation');
formListener();
const sliderCompany = new SliderCompany({
    main: '.repair-types-slider',
    wrapper: '.types-repair1',
    slidesToShow: 1,
    arrowNext: '#repair-types-arrow_right',
    arrowPrev: '#repair-types-arrow_left'
});
sliderCompany.init();
const sliderCompany2 = new SliderCompany({
    main: '.repair-types-slider',
    wrapper: '.types-repair2',
    slidesToShow: 1,
    arrowNext: '#repair-types-arrow_right',
    arrowPrev: '#repair-types-arrow_left'
});
sliderCompany2.init();

