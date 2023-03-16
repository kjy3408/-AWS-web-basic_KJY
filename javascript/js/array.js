let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];
let numbers3 = new Array();

let numbers4 = numbers1.concat(numbers2);

console.log(numbers1);
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

function odd(num) {
    return num % 2 != 0;
}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

let numbers6 = numbers4.filter((n)=>{
    return n % 2 != 0;
})

//괄호, 중괄호, return 생략
let numbers7 = numbers4.filter(n => n % 2 != 0);

for(let i = 0; i < numbers5.length; i++){
    console.log("i: " + numbers5[i]);
}

for(let num of numbers5) { // : 대신 of사용
    console.log(`forEach: ${num}`) //``: 문자열
}
// ====<JAVA>=======
// List<String> list = new Arraylist<String>();
// list.forEach(n -> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

//5라는 값이 몇번 index에 있니
console.log(numbers5.indexOf(5));
//찾지 못하면 -1 리턴.
console.log(numbers5.lastIndexOf(2));
//안에있는 것들을 쉼표로 나눠 문자열로 합쳐준다.
console.log(numbers5.join(""));//"" 공백을 넣으면 쉼표를 없앰
console.log(numbers5.join(";"));//join() 속에 들어가는 값으로 나눠줌.
console.log(numbers5.push(11));//11이 들어간 이후 length 리턴해줌.
console.log(numbers5)
console.log(numbers5.unshift(13));//첫번째 요소(index 0)에 해당 값을 집어넣음.
console.log(numbers5)
console.log(numbers5.pop()); //가장 마지막 값을 제거할때 사용(가장 처음 넣었던 값)
console.log(numbers5);
numbers5.splice(2, 1, 15, 17);//추가와 삭제를 동시에 할 수 있음.
//splice(삭제, 몇개?)
//splice(2,1);
//splice(삭제, 0(없다), 추가(여러개가능))
//splice(2, 0, 15,17,19);
//splice(삭제, 0(없다), 추가(객체가능))
//splice(2, 0, [15,17])
console.log(numbers5);
console.log(numbers5.slice(3, 6)); //3번부터 6번 index까지 출력
console.log(numbers5);

function compare(n1, n2) {
    if(n1 > n2) return 1; //
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
}
console.log(numbers5.sort(compare));
//위아래같음
console.log(numbers5.sort((a,b) => a-b));

console.log(numbers5.reverse())//역정렬 (큰수부터)
console.log(numbers5.toString());

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
    history.back();
}

