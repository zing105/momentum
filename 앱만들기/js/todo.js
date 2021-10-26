const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); //ul


function deleteToDo(event){
    //console.dir 상세정보
                            //parentElement 는 element 의부모
 const D_li = event.target.parentElement;
 D_li.remove()
}




function paintToDo(newTodo){
    const li = document.createElement("li"); //li 만들기
    const span = document.createElement("span"); //span 만들기
    span.innerText = newTodo;


    //버튼제작
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);


    //li 안에 span을 넣는다 button도
    li.appendChild(span);
    li.appendChild(button);

    // li 안에 span 과 button 을 넣은상태

    // li를 실제로 넣기
    toDoList.appendChild(li);
}





function handleTodoSubmit(e){
    e.preventDefault();//새로고침 억제
    const newTodo = toDoInput.value;
    toDoInput.value = ""; //엔터지면 입력값 인풋에서 지우기
    paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleTodoSubmit);