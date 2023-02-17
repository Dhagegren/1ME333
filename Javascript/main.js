const xParagraph = document.createElement("p");
const yParagraph = document.createElement("p");
const zParagraph = document.createElement("p");

const alphaParagraph = document.createElement("p");
const betaParagraph = document.createElement("p");
const gammaParagraph = document.createElement("p");


const log = this.document.createElement("p");

 function init() {
    var button = document.getElementById("btn");    
     button.addEventListener("click", Permission.givePermission);

}

var shaking = false;

window.addEventListener("devicemotion", function (event) {
     
        const alpha = event.rotationRate.alpha;
        const beta = event.rotationRate.beta;
        const gamma = event.rotationRate.gamma;

        alphaParagraph.innerHTML = "Alpha: " + alpha.toFixed(2);
        betaParagraph.innerHTML = "Beta: " + beta.toFixed(2);
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




