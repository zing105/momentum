const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const h1 = document.querySelector("h1");
const greeting = document.querySelector("#greeting");

const HD_CLASSNAME = "hidden";

const USERNAME_KEY = "이름이야";

function onLoginSubmit(e){
    e.preventDefault();
    // console.dir("안녕" , loginInput.value);
     const username = loginInput.value;

    //로컬스토리지에 저  장
    localStorage.setItem(USERNAME_KEY , username);



    loginForm.classList.add(HD_CLASSNAME);
    

    console.log(username);
    paintGreetings(username);
    //greeting.innerText = `안녕 ${username}`;
                            //"안녕 " + username;
   // greeting.classList.remove(HD_CLASSNAME);
    
    // if(username === ""){

    //     alert("입력하셔야합니다.")
    // }
    // //이름길이 찾기
    // else if(username.length > 15){
    //     alert("이름 너무 길어")
    // }
    alert(username + " 어서오세요")
            
};



function paintGreetings(username){
    
      //세이브드 유저네임인 이유 유저네임은 다른 펑션에 있음.
      greeting.innerText = `안녕 ${username}`;
      

    //있으면 유저네임을 보여줌
    greeting.classList.remove(HD_CLASSNAME);

}

// loginButton.addEventListener("click", onLoginBtnClick)




const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername)

if(savedUsername === null){
    // 없으면 프롬을 보여줌
    loginForm.classList.remove(HD_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);//유저네임 인자로 보내준다
    //alert(savedUsername + " 어서오세요");
  
}