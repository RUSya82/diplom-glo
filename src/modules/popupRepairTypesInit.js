import popupOpen from "./popupOpen";

const popupRepairTypesInit = () => {
    const popupRepairTypesLinks = document.querySelectorAll('.link-list');
    popupRepairTypesLinks.forEach( item => {
        item.addEventListener('click', () => {
            const popupRepair = document.querySelector('.popup-repair-types');
            popupOpen(popupRepair);
        });
    })
}
export default popupRepairTypesInit;