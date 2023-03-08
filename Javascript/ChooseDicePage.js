//Knappar för välja hur många tärningar man vill slå, 1-6
// Kankse välja färg på tärningar

var ChooseDicePage = function() {

  
  //fixa createHeader klassen
    this.message = document.createElement("h2");
    message.textContent = "Hur många tärningar vill du kasta?";
    document.body.appendChild(message);

    delete Main.startpage; 

    // Create buttons for each number of dice
    for (var i = 1; i <= 6; i++) {
      
      // Eventlystnare på knappen
      button.addEventListener("click", function(event) {

        this.numDice = parseInt(event.target.textContent);
        //skapar en dicePage där tärningarna kommer att vara
        var dicepage = new DicePage(numDice);

      });
    }
  }