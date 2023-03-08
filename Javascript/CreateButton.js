  var CreateButton = function(text) {

  this.button = document.createElement("button");
  this.button.textContent = text;
  document.body.appendChild(this.button);
  return this.button;
  }
  
 