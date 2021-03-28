const accordion = () => {
    const accordionElement = document.querySelector('.accordion');
    const itemElements = accordionElement.querySelectorAll('.title_block');
    accordionElement.addEventListener('click', (e) => {
        let target = e.target.closest('.title_block');
        if(target){
            itemElements.forEach(item => {
                if(item.classList.contains('msg-active')){
                    item.classList.remove('msg-active');
                }
            })
            target.classList.toggle('msg-active');
        }
    })
};
export default accordion;