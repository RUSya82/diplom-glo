import calcScroll from "./lib/calcScroll";

const toggleLockBody = () => {
    const body = document.body;
    body.classList.toggle('lock');
    const bodyScroll = calcScroll();
    if(body.classList.contains('lock')){
        body.style.marginRight = `${bodyScroll}px`;
    } else {
        body.style.marginRight = `0`;
    }
}
export default toggleLockBody;