// 배열에 저장된 데이터를 반복문으로 출력하기

// 1. for문 
let nameList = ['윤영현', '이현성', '김수연', '임혜주'];
for(let i = 0; i < nameList.length; i++){
    console.log(nameList[i]);
}

// 2. for of문
let foodList = ['피자','치킨','호ㅣ🍣'];
for(let i of foodList){
    console.log(i);
}

// 3. forEach문
let colorList = new Array('보라', '노랑', '남색', '빨강', '파랑', '초록');
colorList.forEach((element, index)=>{
    console.log(element, index+1);
})