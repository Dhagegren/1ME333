//Ska ha eventlysstnare till permission som tar en vidare till ChooseDice.Js
// Nån bild på en tärning som kanske snurrar 
// en start knapp för eventlyssnare

var StartPage = function(buttonText) {

    //var button = document.createElement("button");
    var button = CreateButton.createButton(buttonText)
    //button.textContent = buttonText;
    //document.body.appendChild(button);
    button.addEventListener("click", Permission.givePermission);
  }

  //var start = new Startpage("Start");