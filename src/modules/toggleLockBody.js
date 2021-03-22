import calcScroll from "./calcScroll";

const toggleLockBody = () => {
    document.body.classList.toggle('lock');
    const bodyScroll = calcScroll();
    if(document.body.classList.contains('lock')){
        document.body.style.marginRight = `${bodyScroll}px`;
    } else {
        document.body.style.marginRight = `0`;
    }
}
export default toggleLockBody;