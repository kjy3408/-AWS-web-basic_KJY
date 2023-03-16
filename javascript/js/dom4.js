/**
 * 1. 추가버튼 클릭 시 input에 들어있는 value의 값을 list에 추가...
 * 2. 확인버튼 클릭 시 todo-content의 색상을 red로 변경, 취소선.. 적용  
 * 3. 확인버튼 다시 클릭 시 todo-content의 색상을 black으로 변경, 취소선 미적용...
 */

document.getElementsByClassName("todo-text")[0].value; //입력된 값.(value)

const addButton = document.getElementsByClassName("add-button");
const todoList = document.getElementsByClassName("todo-list");
const todoContent = document.getElementsByClassName("todo-content");
const okCheck = document.getElementsByClassName("ok-check");
// const li = document.createElement("li"); 

addButton[0].onclick = () => {
    const li = document.createElement("li");
    li.innerHTML +=`
    <input type="checkbox" class="ok-check"> <span class="todo-content">${document.getElementsByClassName("todo-text")[0].value}</span>`
    ;
    todoList[0].appendChild(li);

    changeColor();
}

function changeColor() {
    for(let i = 0; i < okCheck.length; i++){
        okCheck[i].onclick = () => {
            if(okCheck[i].checked){
                todoContent[i].style.color = "red";
                todoContent[i].style.textDecoration = 'line-through'
            }else{
                todoContent[i].style.color = "black";
                todoContent[i].style.textDecoration = 'none'
            }
        }
    }
}