let redVal = document.getElementById('redBox');
let greenVal = document.getElementById('greenBox');
let blueVal = document.getElementById('blueBox');
let grayVal = document.getElementById('grayBox');

const marginFunc = () => {
    greenVal.style.marginLeft = '100px';
    blueVal.style.marginLeft = '200px';
    grayVal.style.marginLeft = '300px';

}

let divList = document.querySelectorAll('div');

const radiusFunc = () => {
    divList.forEach(element => {
        element.style.borderTopRightRadius = '50px';
        element.style.borderBottomLeftRadius = '50px';
    });

}
