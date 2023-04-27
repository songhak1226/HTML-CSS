// 1. 이모티콘, 행의 개수 입력 받기
let imt = prompt('이모티콘을 입력');
let hang = Number(prompt('행의 개수를 입력'));

// 2. 이모티콘을 행의 개수에 맞춰 피라미드 형태로 출력하는 함수 만들기
const piramid = (imt,hang) => {
    for(let i = 1; i <= hang; i++){
        for(let j = 1; j <= i; j++){
        document.write(imt);
        }
        document.write('<br>')
    }
}

piramid(imt,hang);