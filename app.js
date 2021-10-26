// const -> 수정할수없는값
// let -> 수정가능한값

// let a = 5;
// let b = 2;
// let myName = "하림";
// // let 바뀔수있는 수 const 바꿀수없다. var 쓰지말것



// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("안녕 "+myName)

// myName = "최하림"
// console.log("완전안녕 "+myName)




//null 아무것도 없다 라는뜻
// let something;
// const amIFat = null;
// console.log(something, amIFat);







// // 자바스크립트는 0 부터 숫자를 센다
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "set"];

// // 배열에서 아이템 받아오기
// console.log(daysOfWeek[4]);

// console.log(daysOfWeek);
// // 배열에 요일 추가하기 아이템 넣기
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit"

// const player = {
//     name:"nico",
//     points:10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// player.name = "하림"
// player.points = player.points + 15;
// console.log(player.points);

// function sayHello(nameOfPerson, age){ 

//     console.log("안녕 내이름은 " + nameOfPerson + " 나이는 " + age);
// }

// sayHello("하림" , 30);
// sayHello("기준", 33);
// sayHello("경빈", 23);

// function plus(fi, se){
//     console.log(fi + se);
// }
// function divide(a, b){
// console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20)

// const player = {
//     name: "하림",
//     sayHello: function(otherPers){      
//         console.log("안녕" + otherPers + " 만나서 반가워");
//     },
// };

// console.log(player.name);

// player.sayHello("경빈");
// player.sayHello("윤진");

// const me = "sexy";
// const days = [1, 2, false,true, null, undefined, "text", me];

// const toBuy = ["potato", "tomato", "피자"]

// console.log(toBuy)

// toBuy[2] // 배열중 하나를 가져오는값은 []
// toBuy[2] = "바나나"
// console.log(toBuy);
// toBuy.push("고기")
// console.log(toBuy);

// const player = {
//     name:"하림",
//     age: 97,
// };
// console.log(player);
// player.name = "최하림림"
// console.log(player);
// player.sexy = "soon";
// console.log(player);

// function minusFive(potato){
//     console.log(potato - 5);
// }
// minusFive(5, 10, 124, 252, 646, 343);     // ()은 실행한다는뜻

// const calculator = {
//     add: function(a, b){
//         console.log(a, b);
//         console.log(a-b);
    
//         console.log(a**b);
//         console.log(a/b);

//     },
//     pl: function(a, b){
//         console.log(a+b);
//     },
    
// };

// calculator.add(5, 1);  
// calculator.pl(5,2);

// const cal = {
//     plus: function(a,b){
//         return a + b;
    
//     }
// }

// const aa = cal.plus(3,4);
// console.log(aa);

// parseInt(age); 숫자로 변경해줌 확인도

// const  age = parseInt( prompt("몇살"));

// // or
// true || true === true
// false || true ===true
// true || false === true
// false || false === false


// // end
// true && true === true
// false && true === false
// true && false === false
// false && false === false


// !== 는 아닌지를 확인

// if(isNaN(age) || age < 0){
//     // condition === true 참인지 트루인지 판별 여러가지로 쓸수있다   참이면 여기가 실행
// console.log("글자및 음수는 불가능해")
// }
// else if (age<18){
//     // condition === false 참인지 트루인지 판별 페일이면 여기가 실행
//     console.log("미성년")
// } 

// //    || 는 or  둘중에 하나면된다 &&는 둘다 트루여야 한다
// else if (age >= 18 && age <= 50 && true){
//     // condition === false 참인지 트루인지 판별 페일이면 여기가 실행
//     console.log("50이상")
// } 
// else if (age > 50 && age <= 80){
//     console.log("너무 과음 하지는 말아")
// }
// else if (age > 80 && age < 99){
//     console.log("80 보다 크다 조심")
// }
// else if (age === 100){

//     console.log("와우 100살축하해")
// }
// else if (age > 100){
//     console.log("진지하게 입력해주세요")
// }


// if((a && b ||(c && d) || (x || w)) {
// true
// }

                        // 선택자 -> 기능 -> 발생 
                        // 아  이  디 값  가져오기
                        // 쿼리 셀렉트 올 아니면 처음 것만 가져옴
    const h1 = document.querySelector(".hello h1");

    function handleh1Ckick(){
    
    // const clickedClass = "clicked"

            // 아래기능들을 쉬운코드로 한줄로 토글
        h1.classList.toggle("clicked");


            // 클래스 네임은 과거를 지우지만 클래스 리스트는 추가되고 일부를 지우기 가능
        // if(h1.classList.contains(clickedClass) ){
        //     h1.classList.remove(clickedClass);
        // } else{
        //     // h1.className = clickedClass;
        //     h1.classList.add(clickedClass);
        // }
   

        //     const colorst =  h1.style.color;
        //     let newColor;
        // if(colorst === "blue"){
        //     newColor = "tomato";
        // }
        // else{
        //     newColor = "blue";
        // }
        // h1.style.color = newColor;
    }   
    
    // h1.style.color = "blue";

    

    // h1[0].innerText = "바뀜! 1";
    // h1[1].innerText = "바뀜! 2";
    // h1[2].innerText = "바뀜! 3";
    
// function handleMouseEnter(){
//     h1.innerText="마우스 엔터하다? 호버느낌";
// }
// function handleMouseLeave(){
//  h1.innerText="마우스 리브 하다";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("복사함!");
// }
// function handeWindowoffline(){
//     alert("sos no wifi");
// }
// function handleWindeowonline(){
//     alert("all good"); 
// }
    console.dir(h1);

    h1.onclick = handleh1Ckick;
//  h1.onmouseenter= handleMouseEnter
//  h1.addEventListener("mouseleave",handleMouseLeave); //이벤트 리스너 선호 나중에 리무브 이벤트로 지우기 가능하기ㄸ매ㅜㄴ


// window.addEventListener("resize" , handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handeWindowoffline);
// window.addEventListener("online", handleWindeowonline);