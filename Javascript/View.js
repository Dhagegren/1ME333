var View = function(){

    this.viewContainer = document.createElement("div");
   
 

}
View.view = null;
View.views = [];

View.add = function(v){
    View.views.push(v)

}

View.swap = function(id){
    
   
    if(View.view != null){
        View.view.remove();
        View.view = null; 
    }
    View.view = new View.views[id]();    
    View.view.append(document.body);
    console.log(View.view);
    
}

View.prototype.append = function(to){
    to.appendChild(this.viewContainer);
}

View.prototype.remove = function(){

    View.view.viewContainer.parentNode.removeChild(this.viewContainer);
}
