var Dice = function() {

    this.diceWrapper = document.createElement("div");
    this.diceWrapper.setAttribute("class", "diceWrapper show-1");
    document.body.appendChild(this.diceWrapper);


    this.sideOne = document.createElement("div");
    this.sideOne.setAttribute("class", "dice side one");
    this.diceWrapper.appendChild(this.sideOne);

    this.sideTwo = document.createElement("div");
    this.sideTwo.setAttribute("class", "dice side two")
    this.diceWrapper.appendChild(this.sideTwo);

    this.sideThree= document.createElement("div");
    this.sideThree.setAttribute("class", "dice side three");
    this.diceWrapper.appendChild(this.sideThree);

    this.sideFour = document.createElement("div");
    this.sideFour.setAttribute("class", "dice side four");
    this.diceWrapper.appendChild(this.sideFour);

    this.sideFive = document.createElement("div");
    this.sideFive.setAttribute("class", "dice side five");
    this.diceWrapper.appendChild(this.sideFive);

    this.sideSix = document.createElement("div");
    this.sideSix.setAttribute("class", "dice side six");
    this.diceWrapper.appendChild(this.sideSix);


 


    this.roll = function(){
        var value =  Math.ceil(Math.random()* 6);
        for(var i = 0; i<7; i++){
          this.diceWrapper.classList.remove("show-" + i);
          if(value == i){
            this.diceWrapper.classList.add("show-"+ i);
          }
        }
      }.bind(this);
     

}



