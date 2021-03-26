const accordion = () => {
    const accordionElement = document.querySelector('.accordion');
    const itemElements = accordionElement.querySelectorAll('.title_block');
    accordionElement.addEventListener('click', (e) => {
        let target = e.target.closest('.title_block');
        if(target){
            target.classList.toggle('msg-active');
        }
    })
};
export default accordion;