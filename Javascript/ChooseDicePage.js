var ChooseDicePage = function () {

  View.call(this);



  this.chooseDicePageContainer = document.createElement("div");
  this.viewContainer.appendChild(this.chooseDicePageContainer);

  this.header = document.createElement("h2");
  this.header.textContent = "Hur många tärningar vill du kasta?";
  this.chooseDicePageContainer.appendChild(this.header);

  //Skapa knappar mellan 1-6 som användaren kan välja för hur många tärningar som ska kastas.
  for (var i = 1; i <= 6; i++) {
    // this.button = new CreateButton(i);
    this.button = document.createElement("button");
    this.button.setAttribute("class", "chooseBtn");
    this.button.textContent = i;
    this.chooseDicePageContainer.appendChild(this.button);

    this.button.addEventListener("click", function (event) {



      this.numDice = parseInt(event.target.textContent);
      //Skapar en DicePage, och byter användaren dit och skickar med värdet som är valt.
      View.add(DicePage);
      View.swap(2, [this.numDice]);

    });

  }

}
ChooseDicePage.prototype = Object.create(View.prototype);
ChooseDicePage.constructor = View;