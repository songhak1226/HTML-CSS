// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서 필요할 때마다 사용하기 위한 구조

// 함수 선언
const intro = function(){
    console.log("안녕ㅇㅇㅇㅇㅇㅇ하세ㅛㅛㅛㅛㅛㅛ🐳");
}

// 함수 호출
intro();

// 매개 변수
const lunch = function (menu){
    console.log(`점심으로는 ${menu} 먹었습니다.👊`);
}
lunch('주먹');

// 매개변수 + return문
const dinner = function (menu){
    return `저녁으로는 ${menu} 먹을거에요🤛`
}
dinner('펀치');
console.log(dinner('펀치'));