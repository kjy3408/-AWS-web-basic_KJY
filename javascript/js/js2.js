
window.onload = () => {//처음부터 끝까지 해석이 됐을때 실행됨.
    console.log("온로드 테스트");
    let calc = new Calc("김준일", 30);
    calc.showinfo();
    Calc.staticPrint(); //static은 class명으로 호출.
    console.log(Calc.testNumber2);
    TestService.getInstance().showTestPrint();
}

function add(a, b) {
    return a + b;
}

//=====< python>=====
// def add(a, b):
//     return a + b

//=====< JAVA >=====
// int add(int a, int b) {
//     return a + b;
// }

console.log(add(10, 20));

/*
    javascript에서의 class

    # : private을 의미한다.
    자료형은 선언하지 않는다.
    멤버변수 또는 멤버메소드를 참조할 때는 항상 this를 붙인다.
    멤버메소드를 정의할 때는 function 키워드를 사용하지 않는다.
    생성자는 constructor로 정의한다.
*/

class Calc {
    #PI = null;
    testNumber = 10;
    static testNumber2 = 20;
    name = null;
    age = null;

    constructor(name, age) {
        //오버로딩
        if(typeof name == "string" && typeof age == "number"){
            this.name = name;
            this.age = age;
        }else if(typeof name == "string") {
            this.name = name;
            this.age = null;
        }else if(typeof name == "number") {
            this.name = null;
            this.age = name;
        }else {
            this.name = null;
            this.age = null;
        }
    }

    showinfo() {
        console.log(this.#PI);
        console.log(this.testNumber);
        console.log(this.testNumber2);
        console.log(this.name);
        console.log(this.age);
    }

    static staticPrint() {
        console.log("스태틱 테스트");
    }
}

let calc2 = {
    name: "김준일",
    age: 30,
    showInfo: function(){ //변수에 함수를 담을 수 있다.(변수명=함수명)
        console.log(calc2.name);
        console.log(calc2.age);
    }
}

class TestService {
    static #instance = null;

    static getInstance (){
        if(this.#instance == null){
            this.#instance = new TestService();
        }
        return this.#instance;
    }

    showTestPrint(){
        console.log("싱글톤 테스트 출력");
    }
}
