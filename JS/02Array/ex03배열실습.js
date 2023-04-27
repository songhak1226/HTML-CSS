// 1. 주어진 데이터를 담은 배열을 생성한다.
let arr = [23, 54, 78, 13, 44];
let result = 0;
// 2. 반복문을 활용해 최댓값을 찾아준다.
for(let i = 0; i < arr.length; i++){
    if(result < arr[i]){
        result = arr[i];
    }
}
// 3. 결과를 팝업창으로 출력해준다.
console.log(`최댓값 >> ${result}`);
