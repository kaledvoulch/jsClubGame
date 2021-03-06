const playArea = {};
const player = {};
let gameObj;
const data = {"data":[
        {"icon":"\u0026#8902;","value":10},
        {"icon":"\u0026#10031;","value":30},
        {"icon":"\u0026#10036;","value":50},
        {"icon":"\u0026#10042;","value":70},
        {"icon":"\u0026#10084;","value":75},
        {"icon":"\u0026#9813;","value":50},
        {"icon":"\u0026#9822;","value":60},
        {"icon":"\u0026#9924;","value":40},
        {"icon":"\u0026#9971;","value":100},
        {"icon":"\u0026#9729;","value":-50},
        {"icon":"\u0026#9785;","value":-100},
        {"icon":"\u0026#9760;","value":-250},
        {"icon":"\u0026#9791;","value":-20}]};
playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".main");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));
document.addEventListener("DOMContentLoaded", getData);
console.log(playArea);


player.score = 0;
player.items = 3;

playArea.btns.forEach(function(item){
  item.addEventListener('click', handleBtn);
});

function getData(){
    fetch("https://api.myjson.com/bins/gungm").then(function(rep){
        return rep.json();
    }).then(function(data){
        gameObj = data.data;
        console.log(gameObj);
    });
    console.log("DOM Loaded");
}

function handleBtn(e){
    console.log(e.target.classList.contains("newGame"));
    if(e.target.classList.contains("newGame")){
        console.log("Yes");
        startGame();
    }
}

function startGame(){
    console.log("Start")
}