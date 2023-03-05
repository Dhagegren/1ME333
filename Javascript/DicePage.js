//Ska hålla tärningarna och även här ska funktionerna för att kolla om det skakar finnas.
var DicePage = function(value){

    var DiceArr = [];


for( var i=0; i<value; i++){
    var dice = new Dice();
    DiceArr.push(dice);
    dice.roll();
}


window.addEventListener("devicemotion", function (event) {
     
    var shaking = false;

    const gamma = event.rotationRate.gamma;

    if (gamma > 20 || gamma < -20) {
      shaking= true;
    }

    else {
      shaking = false;
    }


    let interval = setInterval(function(){

        if (shaking){

           hej();

        }
    }, 1500);
});

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