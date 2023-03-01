//gör som main i webb5 statisk klass som kör igång av sig själv och startar startpage


 function init() {
 

    var startpage = new StartPage("tryck på mig")
}





window.addEventListener("devicemotion", function (event) {
     
        var shaking = false;

        const gamma = event.rotationRate.gamma;
        log2.innerHTML = gamma.toFixed(2);
        document.body.appendChild(log2);


        if (gamma > 20 || gamma < -20) {
          shaking= true;
        }

        else {
          shaking = false;
        }


        let interval = setInterval(function(){

            if (shaking){
                log.innerHTML = "jag skakar";
                document.body.appendChild(log);

            }
            else {
                log.innerHTML = "";
                document.body.appendChild(log);

            }
        }, 1500);
    });

    window.addEventListener("load", init);

    




