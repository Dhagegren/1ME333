//gör som main i webb5 statisk klass som kör igång av sig själv och startar startpage

var Main = {


 init: function() {
    var permissionBtn =CreateButton.createButton("tryck på mig"); 
     permissionBtn.addEventListener("click", Permission.givePermission);
},

  


  }
  window.addEventListener("load", init);




