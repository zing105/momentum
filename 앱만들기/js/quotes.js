const quotes = [
{
quote: "마음만 가지고서는 안되는 것이 있다는 걸  이제는 알기에",
author : "봇말",
},

{
    quote: "조금씩 물드는 하늘처럼 내 삶도 언젠가는 저렇게 채색될 수 있겠지라는 생각을 했다.",
    author : "채색, 흔글",
    },

    {
        quote: "추가.",
        author : "채색, 흔글",
        },

    {
        quote: "둘의 관계는 둘이서 만들어 가는 것 혼자만 노력해서는 이어나갈 수 없다.",
        author : "가린",
        },

        {
            quote: "상대방이 사랑을 받아주지 않는 것이 아니라 당신이 거절을 묵살하고 있는 겁니다.",
            author : "이공작당",
            },

            {
                quote: "기다리기엔 네가 안 올 것 같고 다가가기엔 네가 싫어할 것 같고 포기하기엔 네가 너무 좋다.",
                author : "짝글",
                },

                {
                    quote: "너를 예로 들어 남을 위로할때가 올까봐 나도 그런적이 있다고 담담하게 말하가 될까봐",
                    author : "두려워, 원태연",
                    },

                    {
                        quote: "될 인연은 그렇게 힘들게 몸부림치지 않아도 이루어져요 자신을 너무나 힘들게 하는 인연이라면 그냥 놓아주세요",
                        author : "혜민스님",
                        },

                        {
                            quote: "오랜 연애가 나에게 준 결론은 아무리 발버둥을 쳐도 안 될 인연은 안되고 아무리 도망을 가도 결국 만날 인연은 만난다는 것",
                            author : "로맨스가필요해2",
                            },
                            {
                                quote: "네 모습 그대로 미움받는 것이 너 아닌 모습으로 사랑받는 것보다 낫다.",
                                author : "앙드레 지드",
                                },
                                {
                                    quote: "사람은 완벽할 수 없고 완벽할 필요도 없다. 삶을 너무 보채지 말자 완벽하지 않은 것들이 아릅답다.",
                                    author : "핀터레스트",
                                    },
                                    
                                
                            
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
             // 플롤 소수접 최대로 올려서 소수점을 없앰  
             //메스 랜덤은 무작위 .뒤 숫자값 0.12342134 곱하기 10해서 숫자값으로 만들어야함
const todaysQuote = quotes[Math.floor (Math.random() * quotes.length) ];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;