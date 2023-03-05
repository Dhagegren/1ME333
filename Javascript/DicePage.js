var DicePage = function(value){

    var DiceArr = [];


for( var i=0; i<value; i++){
    var dice = new Dice();
    DiceArr.push(dice);
    dice.roll();
}

 var btn = document.createElement("button");
 btn.textContent = "tryck på mig";
 document.body.appendChild(btn);
 btn.addEventListener("click", hej);

function hej(){
    console.log(DiceArr.length);
for(i=0; i<DiceArr.length; i++){
    DiceArr[i].roll();

}
}

}