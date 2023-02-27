var Dice = function(sides) {

    this.sides = sides ||6;

}

Dice.prototype.roll = function(){
    return Math.floor(Math.random()* this.sides)+1;
};


