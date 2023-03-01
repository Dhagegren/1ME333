//gör som main i webb5 statisk klass som kör igång av sig själv och startar startpage


 function init() {
   var startpage = new StartPage("tryck på mig");
}





window.addEventListener("devicemotion", function (event) {
     
        var shaking = false;

        const gamma = event.rotationRate.gamma;
  
        if (gamma > 20 || gamma < -20) {
          shaking= true;
        }

        else {
          shaking = false;
        }


        let interval = setInterval(function(){

            if (shaking){
               

            }
            else {
                

            }
        }, 1500);
    });

    window.addEventListener("load", init);

    




