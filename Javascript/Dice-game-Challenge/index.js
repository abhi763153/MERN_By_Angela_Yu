var player1 = Math.random();
player1 = player1*6;
player1 = Math.floor(player1)+1;

var player2 = Math.random();
player2 = player2*6;
player2 = Math.floor(player2)+1;

console.log(player1+" "+player2);

if(player1==1){
    document.querySelector(".dice-container1 .dice1").style.visibility="visible";
}
else if(player1==2){
    document.querySelector(".dice-container1 .dice2").style.visibility="visible";
}
else if(player1==3){
    document.querySelector(".dice-container1 .dice3").style.visibility="visible";
}
else if(player1==4){
    document.querySelector(".dice-container1 .dice4").style.visibility="visible";
}
else if(player1==5){
    document.querySelector(".dice-container1 .dice5").style.visibility="visible";
}


if(player2==1){
    document.querySelector(".dice-container2 .dice1").style.visibility="visible";
}
else if(player2==2){
    document.querySelector(".dice-container2 .dice2").style.visibility="visible";
}
else if(player2==3){
    document.querySelector(".dice-container2 .dice3").style.visibility="visible";
}
else if(player2==4){
    document.querySelector(".dice-container2 .dice4").style.visibility="visible";
}
else if(player2==5){
    document.querySelector(".dice-container2 .dice5").style.visibility="visible";
}
var winner = document.querySelector(".winnerAnoucement");
if(player1>player2){
    winner.textContent="🎊 Plyer1 is winner";
    winner.style.color="#06FF00";
}
else if(player1<player2){
    winner.textContent="Plyer2 is winner 🎊";
    winner.style.color="#06FF00";
}
else{
    winner.textContent="Match is tied 🤷‍♀️";
    winner.style.color="#06FF00";
}