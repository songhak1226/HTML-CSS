
let spanVal = document.getElementById('spanTag');
const plus = () => {
    spanVal.innerText = Number(spanVal.innerText) + 1;
}
const minus = () => {
    if(Number(spanVal.innerText) > 0){
    spanVal.innerText = Number(spanVal.innerText) - 1;
}
}

const Initialization = () => {
    spanVal.innerText = Number(0);
}