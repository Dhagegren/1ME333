//Knappar för välja hur många tärningar man vill slå, 1-6
// Kankse välja färg på tärningar

var ChooseDicePage = function() {
 
    
     this.header = new CreateHead("Hur många tärningar vill du kasta?");
  
      // Create buttons for each number of dice
      for (var i = 1; i <= 6; i++) {
      this.button = new CreateButton(i);
      this.button.setAttribute("class", "chooseBtn");
   
      // Eventlystnare på knappen
      this.button.addEventListener("click", function(event) {


        this.header = document.getElementsByTagName("h2");
        for(i=0; i<this.header.length; i++){
        this.header[i].style.display = "none"
        }

        this.numDice = parseInt(event.target.textContent);
        //skapar en dicePage där tärningarna kommer att vara
    
      
       
        this.dicepage = new DicePage(this.numDice);
       
      
        this.buttons = document.getElementsByTagName("button");
        for(i=0; i<this.buttons.length; i++){
          this.buttons[i].style.display= "none"
        };
       

      });
      
    }
  }

  // this.buttons = document.getElementsByTagName("button");
  //       for(i=0; i<buttons.length; i++){
  //         buttons[i].style.display="none";
         