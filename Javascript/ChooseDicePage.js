var ChooseDicePage = function () {

  View.call(this);



  this.chooseDicePageContainer = document.createElement("div");
  this.viewContainer.appendChild(this.chooseDicePageContainer);

  this.header = document.createElement("h2");
  this.header.textContent= "Hur många tärningar vill du kasta?";
  this.chooseDicePageContainer.appendChild(this.header);

  // Create buttons for each number of dice
  for (var i = 1; i <= 6; i++) {
    // this.button = new CreateButton(i);
    this.button = document.createElement("button");
    this.button.setAttribute("class", "chooseBtn");
    this.button.textContent = i;
    this.chooseDicePageContainer.appendChild(this.button);

    // Eventlystnare på knappen
    this.button.addEventListener("click", function (event) {



      this.numDice = parseInt(event.target.textContent);
      //skapar en dicePage där tärningarna kommer att vara


      View.add(DicePage);
      View.swap(2, [this.numDice]);

      //this.dicepage = new DicePage(this.numDice);



    });

  }

}
ChooseDicePage.prototype = Object.create(View.prototype);
ChooseDicePage.constructor = View;