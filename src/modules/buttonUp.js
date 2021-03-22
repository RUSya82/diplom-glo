import scrollToElement from "./scrollToElement";

const buttonUp = () => {
    //если кликнули по кнопке "ВВЕРХ" в футере
    const buttonUp = document.querySelector('.button-footer');
    buttonUp.addEventListener('click', (e) => {
        e.preventDefault()
        const targetElementName = buttonUp.querySelector('a').getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetElementName);
        scrollToElement(targetElement, 500);
    });
};
export default buttonUp;