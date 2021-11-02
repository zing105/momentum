const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); //ul

const TODOS_KYE ="toDos";

let toDos = [];

function saveToDos(){               //JSON.stringify 은 자스 어떤코드든 스트링으로 만듬
    localStorage.setItem(TODOS_KYE, JSON.stringify(toDos));
}



//버튼지우기 이벤트 타켓
function deleteToDo(event){
    //console.dir 상세정보
                           //parentElement 는 element 의부모
 const D_li = event.target.parentElement;
 D_li.remove()
 console.log(D_li.id);
 toDos = toDos.filter(hia => hia.id !== parseInt(D_li.id)); // 우리가 클릭한 li.id와 다른 hia 는 남기고싶다
 
 saveToDos();
}




function paintToDo(newTodo){
    const li = document.createElement("li"); //li 만들기
    li.id = newTodo.id;
    const span = document.createElement("span"); //span 만들기
    span.innerText = newTodo.text;


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

        const newTodoObj = {
            text:newTodo,
            id: Date.now()
                };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
            console.log(newTodoObj.id);
    saveToDos();
}
toDoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item){
//     console.log("이아이템 몇번 실행?", item);
// }

// 로컬스토리지에서 가져오기
const savedToDos= localStorage.getItem(TODOS_KYE);

// ----------------------- null이 아닐때 자바스크립트로 사용할수있도록 바꾸는코드
if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);

    toDos = parsedToDos;

                //forEach 로컬스토리지에있는 아이템 스트링을 어레이로 변환 사용
    parsedToDos.forEach(paintToDo);
    //parsedToDos 아이템에 대해서       콘솔로그를 할것이다라는뜻      => 는 화살표 함수 실행
}

function sexyFilter(){

}