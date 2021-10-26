const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function deleteToDo(){
 console.log("딜리트 누름");
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    //li 안에 span을 넣는다 버튼도
    li.appendChild(span);
    li.appendChild(button);



    // 실제로 넣기
    toDoList.appendChild(li);
}


function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value;
    console.log(newTodo, toDoInput.value);
    toDoInput.value = ""; //엔터지면 입력값 인풋에서 지우기
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleTodoSubmit);