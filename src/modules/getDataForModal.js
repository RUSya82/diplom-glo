import SliderForButtons from "./lib/sliderForButtons";

class GetDataForModal {
    constructor(url) {
        this.url = url;
        this.data = false;
        this.popup = document.querySelector('.popup.popup-repair-types');
        this.navContainer = this.popup.querySelector('.nav-list-popup-repair');
        this.tableContainer = this.popup.querySelector('.popup-repair-types-content-table');
        this.dateContainer = this.popup.querySelector('.popup-repair-types-content__head-date');
        this.headerTableField = this.popup.querySelector('#switch-inner');
    }
    init(){
        this.getData()
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status not 200');
                }
                return response.json()
            })
            .then((response) => {
                this.data = response;
            })
            .then(() => {
                this.renderPopup();
            })
            .then(() => {
                this.addListeners();
            })
            .then(() => {
                this.initButtonSlider();
            })
            .catch((error) => console.log(error));
    }
    getData(){
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    renderPopup(){
        this.navContainer.innerHTML = '';

        this.tableContainer.innerHTML = '';
        this.data.forEach((item ,index) => {
            if(index === 0){
                this.dateContainer.textContent = this.data[0].date;
            } else {
                let button = `<button class="button_o popup-repair-types-nav__item ${index === 1 ? 'active' : ''}">
                                    ${item.title}
                               </button>`;
                this.navContainer.insertAdjacentHTML('beforeend', button);
                const table = document.createElement('table');
                table.classList.add('popup-repair-types-content-table__list');
                if(index === 1){
                    table.classList.add('active');
                    this.headerTableField.textContent = item.title;
                }
                const tbody = document.createElement('tbody');
                item.priceList.forEach((priceItem, index) => {
                    const insertStr = `<tr class="mobile-row ${index === 0 ? 'showHide' : ''}">
                                <td class="repair-types-name">${priceItem.typeService}</td>
                                <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                                <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                                <td class="repair-types-value">${priceItem.units}</sup></td>
                                <td class="repair-types-value">${priceItem.cost} руб.</td>
                            </tr>`;
                    tbody.insertAdjacentHTML('beforeend', insertStr);
                });
                table.append(tbody);
                this.tableContainer.append(table);
            }
        });

    }
    addListeners(){
        this.navContainer.addEventListener('click', (e) => {
            const  target = e.target.closest('.popup-repair-types-nav__item');
            if(target){
                const buttons = this.navContainer.querySelectorAll('.popup-repair-types-nav__item');
                const tables = this.popup.querySelectorAll('.popup-repair-types-content-table__list');
                buttons.forEach((item, index) => {
                    if(item === target){
                        item.classList.add('active');
                        tables[index].classList.add('active');
                        this.headerTableField.textContent = item.textContent;
                    } else {
                        if(item.classList.contains('active')){
                            item.classList.remove('active');
                        }
                        if(tables[index].classList.contains('active')){
                            tables[index].classList.remove('active')
                        }
                    }
                })
            }

        })
    }
    initButtonSlider(){
        const buttonSlider = new SliderForButtons({
            main: '.popup-repair-types .nav-popup-repair-types',
            wrapper: '.popup-repair-types .nav-list-popup-repair',
            slidesToShow: 3,
            arrowPrev: '#nav-arrow-popup-repair_left',
            arrowNext: '#nav-arrow-popup-repair_right',
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
        console.log(buttonSlider)
    }
}
export default GetDataForModal;