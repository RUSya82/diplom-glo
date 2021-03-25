import showPhone from "./modules/showPhone";
import documentListener from "./modules/documentListener";
import buttonUp from "./modules/buttonUp";
import menuInit from "./modules/menuInit";
import maskPhone from "./modules/lib/maskPhone";
import bindModal from "./modules/bindModal";
import SliderCompany from "./modules/lib/sliderCompany";
import formListener from "./modules/formListener";
import iconHoverInit from "./modules/iconHoverInit";
import typesRepairTypes from "./modules/typesRepairTypes";
import transparensySlider from "./modules/transparensySlider";
import transparencyPopupSlider from "./modules/transparencyPopupSlider";
import portfolioSlider from "./modules/portfolioSlider";


showPhone();
menuInit();
documentListener();
buttonUp();
maskPhone('input[name=phone]');
bindModal('.link-privacy', '.popup-privacy');
bindModal('.link-list', '.popup-repair-types');
bindModal('.button_wide', '.popup-consultation');
bindModal('.transparency-item', '.popup-transparency', transparencyPopupSlider);
formListener();
iconHoverInit();
typesRepairTypes();
transparensySlider();
portfolioSlider();
