// 배열 관련 함수
let nameList = ['윤','굥','농'];
console.log(nameList);

// 1. 마지막 인덱스 데이터 추가 : push()
nameList.push('굥굥')
console.log('마지막 추가', nameList);

// 2. 마지막 인덱스 데이터 삭제 : pop()
nameList.pop()
console.log('마지막 삭제', nameList);

// 3. 첫번째 인덱스 데이터 추가 : unshift()
nameList.unshift('끼에엑');
console.log('첫번째 추가', nameList);

// 4. 첫번째 인덱스 데이터 삭제 : shift()
nameList.shift()
console.log('첫번째 삭제', nameList);

// 5. 원하는 위치에 데이터 추가 혹은 삭제 : splice()
// -> 추가 : splice(인덱스, 0, 추가데이터)
nameList.splice(1,0,'꺄르륵');
console.log('splice 추가', nameList); 
// -> 삭제 : splice(인덱스, 삭제개수)
nameList.splice(1,2)
console.log('splice 삭제', nameList);
// -> 추가 및 삭제
// '영표' 삭제, '예진', '승호' 추가
nameList.splice(1,1,'예진','승호')
console.log('농 삭제, 예진, 승호 추가',nameList);

// ***리액트에서 사용함
// 6. 기존의 배열 -> 새로운 배열 : map()
let addPunch = nameList.map((element)=>{
    return `👊${element}👊`
})
console.log(addPunch);