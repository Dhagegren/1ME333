


const log = this.document.createElement("p");

 function init() {
    var permissionBtn =Landingpage.createButton("tryck på mig"); 
     permissionBtn.addEventListener("click", Permission.givePermission);
}





window.addEventListener("devicemotion", function (event) {
     
        var shaking = false;

        const gammaParagraph = document.createElement("p");
        const gamma = event.rotationRate.gamma;
        gammaParagraph.innerHTML = "Gamma: " + gamma.toFixed(2);

        
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

        document.body.appendChild(alphaParagraph);
        document.body.appendChild(betaParagraph);
        document.body.appendChild(gammaParagraph);



    });

    window.addEventListener("load", init);




