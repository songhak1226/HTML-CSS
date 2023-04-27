// 1. 주어진 데이터를 담은 배열을 생성한다. (1~8)
let arr = [1,2,3,4,5,6,7,8];
let arr2 = [];
let num = 0;
// 2 . 데이터에서 홀수인 숫자를 찾고 개수를 세준다.
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2 == 1){
//         arr2[num] = arr[i];
//         num++;
//     }
// } 내가 한거


for(let i of arr){
    if(i%2 == 1){
        arr2[num] = i;
        num++;
    }
}

// 3. 결과를 팝업창으로 출력해준다.
alert(`list에 들어있는 홀수는${arr2}이며, 총${num}개 입니다.`);