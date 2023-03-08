//Ska ha eventlysstnare till permission som tar en vidare till ChooseDice.Js
// Nån bild på en tärning som kanske snurrar 
// en start knapp för eventlyssnare
//klassen skapar en knapp för användaren att trycka på för att ge tillstånd att använda rörelsesensorer

var StartPage = function(buttonText) {
  
  View.call(this);
  this.createContainer 

    this.button = new CreateButton("Tryck på mig");
    this.button.setAttribute("id", "startBtn");
    this.button.addEventListener("click", Permission.givePermission);
 
  }

  StartPage.prototype = Object.create(View.prototype);
  StartPage.constructor = View;

  //var start = new Startpage("Start");