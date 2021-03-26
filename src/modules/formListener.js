import Validator from "./lib/validator";
import popupOpen from "./popupOpen";
const formListener = () => {
    /**
     * загоняем наши формы в валидатор
     * @type {HTMLElement}
     */
    const feedbackBlockForms = document.querySelectorAll('.feedback-block__form');
    const feedbackForms = document.querySelectorAll('.feedback__form');
    const popupThanks = document.querySelector('.popup.popup-thank');


    const sendForm = (form, validObject) => {

        const postData = (body) => {
            return fetch('./server.php', {
                body: body,
                method: 'POST',
            });
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const body = {};
            formData.forEach((item, index) => body[index] = item);
            if (!validObject.init()) {
                postData(JSON.stringify(body))
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status not 200');
                        } else {
                            popupOpen(popupThanks);
                        }
                    })
                    .then(() => {
                        setTimeout(() => {
                            event.target.reset();
                        }, 2000);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                const err = validObject.getErrors();
                err.forEach((value, valueAgain, set) => {
                    //показываем сообщение при ненажатом checkbox
                    if(value.element.type === 'checkbox'){
                        const descriptionOld = form.querySelector('.checkbox__descr');
                        descriptionOld.style.cssText = 'color: #bf0d0d; font-size: 16px; font-weight: bold';
                        setTimeout(() => {
                            descriptionOld.style.cssText = '';
                        }, 2000);
                    }
                });
                validObject.cleanErrors();
            }
        });

    };


    /**
     * Привязываем формы
     */
    feedbackBlockForms.forEach(item => {
        const nameField = item.querySelector('.feedback-block__form-input_name');
        const phoneField = item.querySelector('.feedback-block__form-input_phone');
        const check = item.querySelector('.checkbox__input');
        sendForm(item, new Validator(item, [
            {
                element: nameField,
                method: 'name'
            },
            {
                element: phoneField,
                pattern: new RegExp('[0-9()+ ]', 'ig'),
            },
            {
                element: check,
                type: 'checkbox',
            }
        ]) );
    });
    feedbackForms.forEach(item => {
        const phoneField = item.querySelector('input[name=phone]');
        const check = item.querySelector('.checkbox__input');
        sendForm(item, new Validator(item, [
            {
                element: phoneField,
                pattern: new RegExp('[0-9()+ ]', 'ig'),
            },
            {
                element: check,
                type: 'checkbox',
            }
        ]));
    });
};
export default formListener;