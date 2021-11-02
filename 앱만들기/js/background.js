const images = [
"0.jpeg",
"1.jpeg",
"2.jpeg",
]

const chosenImage = images [Math.floor (Math.random() * images.length)]
console.log(images);

//이미지를 만들어냄 <img>  크레이티브엘리먼트
const bgImage = document.createElement("img");
//이미지 src 링크 
bgImage.src = `img/${chosenImage}`;


            // html코드를 추가 할수있음/ prepend는 가장위에 appendChild 제일 밑에
document.body.appendChild(bgImage);