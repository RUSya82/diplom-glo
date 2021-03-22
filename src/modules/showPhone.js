const showPhone = () => {
    const headerContactsWrap = document.querySelector('.header-contacts-wrap');
    const phoneNumber = document.querySelector('.header-contacts__phone-number-accord a');
    const arrow = document.querySelector('.header-contacts__arrow');
    const phoneAccordeon = document.querySelector('.header-contacts__phone-number-accord');
    const phoneNumberWrap = document.querySelector('.header-contacts__phone-number-wrap');

    const togglePhone = () => {
        if(headerContactsWrap.classList.contains('.header-contacts__wrap-opened')){
            phoneAccordeon.style.top = '0';
            arrow.style.transform = 'rotate(0deg)';
            phoneNumber.style.opacity = '0';
            headerContactsWrap.classList.remove('.header-contacts__wrap-opened');
        } else {
            phoneAccordeon.style.top = getComputedStyle(phoneNumberWrap).height;
            arrow.style.transform = 'rotate(180deg)';
            phoneNumber.style.opacity = '1';
            headerContactsWrap.classList.add('.header-contacts__wrap-opened');
        }
    };
    arrow.addEventListener('click', togglePhone);
}
export default showPhone;