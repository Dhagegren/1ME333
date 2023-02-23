


const log = this.document.createElement("p");

 function init() {
    var permissionBtn =CreateButton.createButton("tryck på mig"); 
     permissionBtn.addEventListener("click", Permission.givePermission);
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




