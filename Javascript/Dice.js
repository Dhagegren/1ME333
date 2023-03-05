var Dice = function(sides) {

    this.sides = sides;

    // colors = colors || #FFFFF //vit
    //dotcolors = dotcolors ||#FFFF // svart

    this.sideOne = document.createElement("div");
    this.sideOne.setAttribute("class", "dice side one");

    this.sideTwo = document.createElement("div");
    this.sideTwo.setAttribute("class", "dice side two")


    this.sideThree= document.createElement("div");
    this.sideThree.setAttribute("class", "dice side three");

    this.sideFour = document.createElement("div");
    this.sideFour.setAttribute("class", "dice side four");

    this.sideFive = document.createElement("div");
    this.sideFive.setAttribute("class", "dice side five");

    this.sideSix = document.createElement("div");
    this.sideSix.setAttribute("class", "dice side six");
    

}

Dice.prototype.roll = function(){
    return Math.floor(Math.random()* this.sides)+1;
};


