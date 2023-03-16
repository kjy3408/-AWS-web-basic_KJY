window.onload = () => {

}

//변수에 function 정의가 들어갈 수 있다.
let a = function() {
    console.log("a 함수 호출");
}

a();

console.log(typeof a);

// let b = function(f) {
//     console.log("테스트가 프린트 되기 전에 무조건 실행")
//     f();
// }
//  ========위아래 같음========
let b = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행")
    f();
}

b(a);

b(function(){console.log("test")});

// b(function(){
//     console.log("test")
// })

(function(){console.log("test2")}());
