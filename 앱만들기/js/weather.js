const API_KEY = "d1ac8ded1ff0d70ec0b2f7278ae58e3f"

function onGeoOk(position){
    const lat =  position.coords.latitude;
    const lon = position.coords.longitude;
 const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   // fetch 직접 주소를 칠 필요없이 자스에서 부르는 코드
 fetch(url).then(all => all.json()).then(data => {

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
       const name = data.name;
       weather.innerText = `현재온도 ${data.main.temp}도 / ${data.weather[0].main}`
       city.innerText = name;
      
    }); 
}
function onGeoErroR(){
    alert("위치를 알수가없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErroR);
