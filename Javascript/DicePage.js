//Ska hålla tärningarna och även här ska funktionerna för att kolla om det skakar finnas.
var DicePage = function (value) {


    View.call(this);
    this.diceArr = [];



    this.button = document.createElement("button");
    this.viewContainer.appendChild(this.button);
    this.button.addEventListener("click", function(){
    View.swap(1);
})



    this.positionArray = [];
    for (i = 1; i < 7; i++) {
        this.diceHolder = document.createElement("div");
        this.diceHolder.setAttribute("id", "div" + i);
        this.viewContainer.appendChild(this.diceHolder);
        this.positionArray.push(this.diceHolder);
    }

    for (var i = 0; i < 6; i++) {
        var dice = new Dice();
        this.positionArray[i].appendChild(dice.diceWrapper);
        this.diceArr.push(dice);
        dice.roll;
    }




    this.eventRoll = function(){
    window.addEventListener("devicemotion", function (event) {
        
       
      
        const threshhold = 15;
        const { x, y, z } = event.acceleration;
        const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

        if (acceleration > threshhold) {
            diceRoll();
        }
    });

    }
    console.log(this.diceArr[0].roll);
    this.diceRoll = function() {
        for (i = 0; i < this.diceArr.length; i++) {
            this.diceArr[i].roll;
        

        }
    }

this.eventRoll();
this.diceRoll();


}

DicePage.prototype.addDices = function (value) {

}


DicePage.prototype = Object.create(View.prototype);
DicePage.constructor = View;