const clock = document.querySelector("#clock");
const calender = document.querySelector("#calender");
function getClock(){
    
    const date = new Date();
    const Year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate())
    const hours =   String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");


    calender.innerText = `${Year}년 ${month}월 ${day}일`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}

getClock() // 바로 하나 보이게끔
setInterval(getClock, 1000);
//setTimeout(sayHello, 5000); // 한번만 작동