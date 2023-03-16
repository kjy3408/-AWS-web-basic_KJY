// location.href = "https://www.naver.com"; //네이버로 이동됨
const naverButton = document.getElementsByTagName("button"); //getElementsByTagName을하면 list로 가져옴. 해당 index참조
naverButton[0].onclick = () => {
    // location.href = "https://www.naver.com";  //href 변수명! 함수호출아님
    location.replace("https://www.naver.com");  //replace 함수호출! history남기지않음
}

naverButton[1].onclick = () => {
    location.href = "http://127.0.0.1:5500/javascript/array.html"
}