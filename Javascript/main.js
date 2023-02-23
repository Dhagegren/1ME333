


const log = this.document.createElement("p");
const log2 = this.document.createElement("p");

 function init() {
    var permissionBtn =CreateButton.createButton("tryck på mig"); 
     permissionBtn.addEventListener("click", Permission.givePermission);
}





window.addEventListener("devicemotion", function (event) {
     
        var shaking = false;

        const gamma = event.rotationRate.gamma;
        log2.innerHTML = gamma;
        document.body.appendChild(log2);


        if (gamma > 40 || gamma < -40) {
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
        }, 600);
    });

    window.addEventListener("load", init);




