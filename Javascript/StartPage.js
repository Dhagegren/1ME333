//Ska ha eventlysstnare till permission som tar en vidare till ChooseDice.Js
// Nån bild på en tärning som kanske snurrar 
// en start knapp för eventlyssnare
//klassen skapar en knapp för användaren att trycka på för att ge tillstånd att använda rörelsesensorer

var StartPage = function(buttonText) {

    var button = new CreateButton(buttonText)
    button.addEventListener("click", Permission.givePermission);
  }

  //var start = new Startpage("Start");