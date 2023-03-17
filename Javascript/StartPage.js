
//klassen skapar en knapp för användaren att trycka på för att ge tillstånd att använda rörelsesensorer

var StartPage = function (buttonText) {

  View.call(this);


  this.button = document.createElement("button");
  this.button.setAttribute("id", "startBtn");
  this.button.textContent = "Tryck på madsig";
  this.viewContainer.appendChild(this.button);
  this.button.addEventListener("click", Permission.givePermission);

}

StartPage.prototype = Object.create(View.prototype);
StartPage.constructor = View;

