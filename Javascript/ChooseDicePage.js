//Knappar för välja hur många tärningar man vill slå, 1-6
// Kankse välja färg på tärningar

function ChooseDicePage() {
    var message = document.createElement("p");
    message.textContent = "Hur många tärningar vill du kasta?";
    document.body.appendChild(message);
  
    // Create buttons for each number of dice
    for (var i = 1; i <= 6; i++) {
      //CreateButton.createButton(i);
       var button = document.createElement("button");
       button.textContent = i.toString();
       document.body.appendChild(button);
  
      // Event listener for the button
      button.addEventListener("click", function(event) {
        var numDice = parseInt(event.target.textContent);
        for(i=0; i<numDice; i++){
          var dice = new Dice();
        }
      });
    }
  }