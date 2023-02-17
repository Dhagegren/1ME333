function Landingpage() {
    // static class constructor
  }
  
  Landingpage.createButton = function(text) {
    var button = document.createElement("button");
    button.textContent = text;
    console.log(document);
    document.body.appendChild(button);
    return button;
  };