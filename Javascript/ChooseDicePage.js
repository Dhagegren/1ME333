//Knappar för välja hur många tärningar man vill slå, 1-6
// Kankse välja färg på tärningar

function ChooseDicePage() {
    var message = document.createElement("h2");
    message.textContent = "Hur många tärningar vill du kasta?";
    document.body.appendChild(message);


    var diceArr = [];
  
    // Create buttons for each number of dice
    for (var i = 1; i <= 6; i++) {
       var button = document.createElement("button");
       button.textContent = i.toString();
       document.body.appendChild(button);
  
      // Event listener for the button
      button.addEventListener("click", function(event) {

        var numDice = parseInt(event.target.textContent);

        var dicepage = new DicePage(numDice);

        // for(i=0; i<numDice; i++){
        //   var dice = new Dice(); 
        //   diceArr.push(dice);
        //   dice.roll();
        // }
       
    
       

      });
    }
  }