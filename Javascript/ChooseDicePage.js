//Knappar för välja hur många tärningar man vill slå, 1-6
// Kankse välja färg på tärningar

function ChooseDicePage() {

  
  //fixa createHeader klassen
    var message = document.createElement("h2");
    message.textContent = "Hur många tärningar vill du kasta?";
    document.body.appendChild(message);



    // Create buttons for each number of dice
    for (var i = 1; i <= 6; i++) {
       var button = CreateButton(i);
     
      // Eventlystnare på knappen
      button.addEventListener("click", function(event) {

        var numDice = parseInt(event.target.textContent);
        //skapar en dicePage där tärningarna kommer att vara
        var dicepage = new DicePage(numDice);
        button[i].style.display = "none";

      });
    }
  }