function CreateHeader(text){
    var textNode = document.createElement("h1");
    textNode.textContent = text;
    document.body.appendChild(textNode);
    return textNode;
}

//funkar inte vet itne varför, använd i chooseDicePage om den funkar