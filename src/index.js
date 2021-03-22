import showPhone from "./modules/showPhone";
import documentListener from "./modules/documentListener";
import buttonUp from "./modules/buttonUp";
import menuInit from "./modules/menuInit";
import popupRepairTypesInit from "./modules/popupRepairTypesInit";
import maskPhone from "./modules/lib/maskPhone";


showPhone();
menuInit();
documentListener();
buttonUp();
popupRepairTypesInit();
maskPhone('input[name=phone]');

