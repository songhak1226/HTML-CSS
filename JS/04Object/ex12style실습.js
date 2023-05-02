// 요소 가져오기
let redVal = document.getElementById('redBox');
let blueVal = document.getElementById('blueBox');
let greenVal = document.getElementById('greenBox');
let yellowVal = document.getElementById('yellowBox');


// 이동하기 버튼 클릭 시
// 박스들이 계단 형태로 이동
const marginFunc = () => {
    blueVal.style.marginLeft = '100px';
    greenVal.style.marginLeft = '200px';
    yellowVal.style.marginLeft = '300px';

}

// 배열 형태로 요소 전체 가져오기
let divList = document.querySelectorAll('div');

// 둥글게 버튼 클릭 시
// 오른쪽 위, 왼쪽 아래 모서리 둥글게

const radiusFunc = () => {
    // for문 사용
    // for(let i of divList){
    //     i.style.borderTopRightRadius = '50px';
    //     i.style.borderBottomLeftRadius = '50px';
    // }
    
    // foreach문 사용
    divList.forEach(element => {
        element.style.borderTopRightRadius = '50px';
        element.style.borderBottomLeftRadius = '50px';
    });

    // redVal.style.borderTopRightRadius = '50px';
    // redVal.style.borderBottomLeftRadius = '50px';

    // blueVal.style.borderTopRightRadius = '50px';
    // blueVal.style.borderBottomLeftRadius = '50px';

    // greenVal.style.borderTopRightRadius = '50px';
    // greenVal.style.borderBottomLeftRadius = '50px';

    // yellowVal.style.borderTopRightRadius = '50px';
    // yellowVal.style.borderBottomLeftRadius = '50px';

}
