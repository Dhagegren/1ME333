var CreateHeader = function(text){
    this.textNode = document.createElement("h1");
    this.textNode.textContent = text;
    document.body.appendChild(textNode);
    return textNode;
}

//funkar inte vet itne varför, använd i chooseDicePage om den funkar