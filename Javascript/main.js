//gör som main i webb5 statisk klass som kör igång av sig själv och startar startpage
var Main = {

 init: function() {
   var startpage = new StartPage("tryck på mig");

  }

}
window.addEventListener("load", init);

    




