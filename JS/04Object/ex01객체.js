// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입

// 구조 -> {key1:value, key2:value, ...};
// key -> 객체의 속성(property)
// value -> 속성의 값 / 기본 자료형, 함수, 배열, 객체

// 객체 생성
let person = {
    "name" : "윤",
    age : 20,
    // name : "굥",
    // "age" : 20,
    // 따옴표 붙히든 말든 상관없음
    isPerson : true,
    friday : () => {
        console.log('오늘은 금요일입니다 후후후...');
    },
    favorite : {
        food : "pizza",
        drink : "coffe",
        color : "blue"
    },
    smhrd : ['예진쌤', '영표쌤', '세영쌤']
};

// 객체 접근
console.log(person);
console.log('이름 : ', person.name);
console.log('나이 : ', person.age);
console.log('사람 : ', person.isPerson);
person.friday();
console.log("좋아하는 음료 : ", person.favorite.drink);
console.log('담임 선생님 : ',person.smhrd[0]);

// 속성값 변경 및 추가
person.name = "굥";
console.log('이름 변경 : ', person.name);
person.height = 180;
console.log('키 : ', person.height);
// weight 속성값 추가
person.weight = 15;
console.log('몸무게 : ', person.weight);
