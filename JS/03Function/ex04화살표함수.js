// 화살표 함수 : 함수 표현식 형태, function 키워드 대신 =>

const intro = () => {
    console.log('Hi');
}
intro();

// const lunch = (menu) =>{
//     console.log(`점심으로는 ${menu} 먹었습니다.👊`);
// }
//한줄로 간결하게 작성가능
const lunch = menu => console.log(`점심으로는 ${menu} 먹었습니다.👊`);

lunch('주먹');

// 매개변수 + return문
// const dinner = function (menu) {
//     return `저녁으로는 ${menu} 먹을거에요🤛`
// }
const dinner = menu => `저녁으로는 ${menu} 먹을거에요🤛`

dinner('펀치');
console.log(dinner('펀치'));

// 매개변수 1개일 때 -> ()생략 가능
// 실행문 1개 -> {}, return 생략 가능