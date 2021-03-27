import showPhone from "./modules/showPhone";
import documentListener from "./modules/documentListener";
import buttonUp from "./modules/buttonUp";
import menuInit from "./modules/menuInit";
import maskPhone from "./modules/lib/maskPhone";
import bindModal from "./modules/lib/bindModal";
import SliderCompany from "./modules/lib/sliderCompany";
import formListener from "./modules/formListener";
import iconHoverInit from "./modules/lib/iconHoverInit";
import typesRepairTypes from "./modules/typesRepairTypes";
import transparensySlider from "./modules/transparensySlider";
import transparencyPopupSlider from "./modules/transparencyPopupSlider";
import portfolioSlider from "./modules/portfolioSlider";
import reviewsSliderInit from "./modules/reviewSliderInit";
import shemeButtonSliderInit from "./modules/shemeButtonSliderInit";
import SliderForButtons from "./modules/lib/sliderForButtons";
import accordion from "./modules/accordion";
import designTabsInit from "./modules/designTabsInit";
import designPopupInit from "./modules/designPopupInit";
import GetDataForModal from "./modules/getDataForModal";


showPhone();
menuInit();
documentListener();
buttonUp();
maskPhone('input[name=phone]');
bindModal('.link-privacy', '.popup-privacy');
bindModal('.link-list', '.popup-repair-types');
bindModal('.button_wide', '.popup-consultation');
bindModal('.transparency-item', '.popup-transparency', transparencyPopupSlider);
bindModal('.link-list-designs', '.popup.popup-design');
// bindModal('.portfolio-popup-link', '.popup-portfolio');
formListener();
iconHoverInit({
    icon: '.formula-item__icon',
    item: '.formula-item',
    popup: '.formula-item-popup'});
iconHoverInit({
    icon: '.problems-item__icon',
    item: '.problems-item',
    popup: '.problems-item-popup'});
typesRepairTypes();
transparensySlider();
portfolioSlider();
reviewsSliderInit();
shemeButtonSliderInit();
accordion();
designTabsInit();
// designPopupInit();

const formulaSlider = new SliderCompany({
    main: '.formula-slider-wrap',
    wrapper: '.formula-slider',
    slidesToShow: 3,
    arrowPrev: '#formula-arrow_left',
    arrowNext: '#formula-arrow_right',
    maxWidth: 1024,
    useOverflow: false,
    responsive: [
        {
            breakpoint: 1024,
            slidesToShow: 3,
        },
        {
            breakpoint: 767,
            slidesToShow: 1,
        },
    ]
});
const problemsSlider = new SliderCompany({
    main: '.problems-slider-wrap',
    wrapper: '.problems-slider',
    slidesToShow: 1,
    arrowPrev: '#problems-arrow_left',
    arrowNext: '#problems-arrow_right',
    maxWidth: 1024,
    useOverflow: false
});
const shemeButtonSlider = new SliderForButtons({
    main: '.sheme-button-slider',
    wrapper: '#scheme-list',
    slidesToShow: 3,
    arrowPrev: '#nav-arrow-scheme_left',
    arrowNext: '#nav-arrow-scheme_right',
    maxWidth: 1024,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            slidesToShow: 3,
        },
        {
            breakpoint: 575,
            slidesToShow: 1,
        },
    ]
});

const partnersSlider = new SliderCompany({
    main: '#partners .wrapper',
    wrapper: '.partners-slider',
    slidesToShow: 3,
    arrowPrev: '#partners-arrow_left',
    arrowNext: '#partners-arrow_right',
    infinity: true,
    // useOverflow: false,
    responsive: [
        {
            breakpoint: 1024,
            slidesToShow: 3,
        },
        {
            breakpoint: 767,
            slidesToShow: 1,
        },
    ]
});

const resp = new GetDataForModal('./db/db.json');
resp.init();


