//1. 원하는 색상을 입력하세요 라는 입력창 만들기
let inputColor = prompt('원하는 색상을 입력하세요');
// 2. 빨강 -> red, 초록 -> green, 파랑 -> blue
// if(inputColor == '빨강'){
//     document.getElementById('bodyTag').style.backgroundColor = 'red';
// } else if(inputColor =='초록'){
//     document.getElementById('bodyTag').style.backgroundColor = 'green';
// } else if(inputColor == '파랑'){
//     document.getElementById('bodyTag').style.backgroundColor = 'blue';
// } else{
//     alert('잘못입력하셨습니다.');
// }

let result = '';
switch (inputColor) {
    case '빨강': result = 'red'; break;
    case '초록': result = 'green'; break;
    case '파랑': result = 'blue'; break;
    default : alert('잘못 입력하셨습니다.')
}
document.getElementById('bodyTag').style.backgroundColor = result;