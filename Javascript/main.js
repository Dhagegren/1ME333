//gör som main i webb5 statisk klass som kör igång av sig själv och startar startpage
var Main = {

 init: function() {
  View.add(StartPage);
  View.swap(0);
   //var startpage = new StartPage("tryck på mig");
  },
  
}
window.addEventListener("load", Main.init);

    




