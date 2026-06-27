let player={

hp:100,

light:0,

dark:0,

sacrifice:0,

scene:0

};





const scenes=[



{

text:
"یک روستا توسط هیولاها نابود شده. چه کار می‌کنی؟",

choices:[

["نجات مردم","light"],

["گرفتن قدرت آنها","dark"]

]

},



{

text:
"یک صدای تاریک قدرت بی‌نهایت به تو پیشنهاد می‌دهد.",

choices:[

["رد کردن قدرت","light"],

["قبول کردن تاریکی","dark"]

]

},



{

text:
"Eclipse Core نابود می‌شود اما یک نفر باید فدا شود.",

choices:[

["نابود کردن هسته","hero"],

["تبدیل شدن به فرمانروای تاریکی","demon"],

["فدا کردن خودت","sacrifice"]

]

}



];







function updateGame(){



document.getElementById("hp").innerText=
player.hp;


document.getElementById("light").innerText=
player.light;


document.getElementById("dark").innerText=
player.dark;


document.getElementById("sacrifice").innerText=
player.sacrifice;



let scene=scenes[player.scene];



if(!scene){

showEnding();

return;

}




document.getElementById("story")
.innerText=
scene.text;



let box=
document.getElementById("choices");


box.innerHTML="";



scene.choices.forEach(choice=>{


let btn=
document.createElement("button");


btn.innerText=
choice[0];


btn.className="choice";



btn.onclick=function(){


selectChoice(choice[1]);


};



box.appendChild(btn);



});



}








function selectChoice(type){



if(type==="light")
player.light++;



if(type==="dark")
player.dark++;



if(type==="sacrifice")
player.sacrifice++;



player.scene++;


updateGame();


}







function showEnding(){



let result;



if(player.sacrifice>0){


result=
"🌌 پایان فداکاری: تو خودت را قربانی کردی و دنیا را نجات دادی.";


}



else if(player.dark>player.light){


result=
"🔥 پایان شیطان: تو فرمانروای تاریکی شدی.";


}



else{


result=
"⚔️ پایان قهرمان: دنیا را نجات دادی.";


}




document.getElementById("story")
.innerText=result;



document.getElementById("choices")
.innerHTML=
`
<button onclick="restart()">
شروع دوباره
</button>
`;



}







function saveGame(){



localStorage.setItem(

"EclipseSave",

JSON.stringify(player)

);



alert("ذخیره شد");


}







function restart(){



localStorage.removeItem("EclipseSave");


location.reload();


}






let saved=
localStorage.getItem("EclipseSave");



if(saved){


player=
JSON.parse(saved);


}




updateGame();
