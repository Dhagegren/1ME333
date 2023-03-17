//Ska hålla tärningarna och även här ska funktionerna för att kolla om det skakar finnas.
var DicePage = function (value) {



    //Kalla på View för att skapa ett arv till View klassen.
    View.call(this);
    this.diceArr = [];


    //Lägger på händelsehanterare på window för att ta in rörelser från mobilen, skapar ett threshhold och kallar på en funktion vid "skakning"
    m_this = this;
    window.addEventListener("devicemotion", function (event) {

        const threshhold = 15;
        const { x, y, z } = event.acceleration;
        const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

        if (acceleration > threshhold) {
            m_this.diceRoll();
        }
    });


    //skapar en tillbaka knapp som tar användaren tillbaka till sidan för att välja tärningar.
    this.button = document.createElement("button");
    this.button.setAttribute("id", "backBtn");
    this.viewContainer.appendChild(this.button);
    this.button.addEventListener("click", function () {
        View.swap(1);
    })



    //Skapar div element som ska hålla tärnningarna och skapar sedan tärningar och lägger in i elementen.
    this.positionArray = [];
    for (i = 1; i < 7; i++) {
        this.diceHolder = document.createElement("div");
        this.diceHolder.setAttribute("id", "div" + i);
        this.viewContainer.appendChild(this.diceHolder);
        this.positionArray.push(this.diceHolder);
    }

    for (var i = 0; i < value[0]; i++) {
        var dice = new Dice();
        this.positionArray[i].appendChild(dice.diceWrapper);
        this.diceArr.push(dice);
        dice.roll();
    }

    //Funktion som kallas på vid skakning för att ge alla tärningar nya värden och snurra dem.
    this.diceRoll = function () {
        do {
            this.diceArr[i];
            for (i = 0; i < this.diceArr.length; i++) {
                this.diceArr[i].roll();
            }

        }
        while (i = this.diceArr[i].value);
    }

}



DicePage.prototype = Object.create(View.prototype);
DicePage.constructor = View;