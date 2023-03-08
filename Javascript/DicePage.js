//Ska hålla tärningarna och även här ska funktionerna för att kolla om det skakar finnas.
var DicePage = function(value){


    View.call(this);
    this.createContainer 
      
    
    delete Permission.Choose;

    //detta kanske kommer att fungera, jag vet inte riktigt hur, det tar mig tillbaka och jag kan
    // var backBtn = document.createElement("div");
    // backBtn.setAttribute("id", "backBtn");
    // backBtn.addEventListener("click", function(event){
  
    //     var choose = new ChooseDicePage();
    //     document.body.appendChild(this.backBtn);
    // });
  
    this.dicePageContainer = document.createElement("div");
    document.body.appendChild(this.dicePageContainer);

    this.positionArray= [];
        for(i=1; i<7; i++){
        this.diceHolder = document.createElement("div");
        this.diceHolder.setAttribute("id","div"+i);
        this.dicePageContainer.appendChild(this.diceHolder);
        this.positionArray.push(this.diceHolder);
        }
       
    var DiceArr = [];

    for( var i=0; i<value; i++){
        
        var dice = new Dice();

        this.positionArray[i].appendChild(dice.diceWrapper);
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


DicePage.prototype = Object.create(View.prototype);
DicePage.constructor = View;