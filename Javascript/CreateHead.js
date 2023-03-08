var CreateHead = function(text){

    this.header = document.createElement("h2");
    this.header.textContent = text;
    document.body.appendChild(this.header);
    return this.header;
}

//funkar