//Startar igång programmet och tar fram startpage.
var Main = {


  init: function () {
    View.add(StartPage);
    View.swap(0);
  },

}
window.addEventListener("load", Main.init);






