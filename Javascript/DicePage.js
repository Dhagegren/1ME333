//Ska hålla tärningarna och även här ska funktionerna för att kolla om det skakar finnas.
var DicePage = function(value){

    var DiceArr = [];

    var btns = document.getElementsByClassName("btns");
    for(i=0; i<btns.length; i++){
        btns[i].style.display="none";
    }

    for( var i=0; i<value; i++){
        var dice = new Dice();
        DiceArr.push(dice);
        dice.roll(); 
    }


window.addEventListener("devicemotion", function (event) {
     
const threshhold = 15;
const {x,y,z} = event.acceleration;
const acceleration = Math.sqrt(x**2 + y**2 + z**2);

if(acceleration> threshhold){
    diceRoll();
}
});


function diceRoll(){
    console.log(DiceArr.length);
for(i=0; i<DiceArr.length; i++){
    DiceArr[i].roll();

}
}

}