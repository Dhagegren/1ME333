const xParagraph = document.createElement("p");
const yParagraph = document.createElement("p");
const zParagraph = document.createElement("p");

const alphaParagraph = document.createElement("p");
const betaParagraph = document.createElement("p");
const gammaParagraph = document.createElement("p");


const log = this.document.createElement("p");

function init() {
    var button = document.getElementById("btn");
    button.addEventListener("click", givePermission);

}

var shaking = false;


function givePermission() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(response => {
            if (response === 'granted') {
                window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
            }
        });
    }

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
}



//kod för dator funkar inte för att läsa av skakning, det är bara orientering av mobilen.
window.addEventListener("deviceorientation", function(event) {

    var alphaPc = event.alpha;
    var betaPc = event.beta;
    var gammaPc = event.gamma;

    xParagraph.innerHTML = "Alpha: "+ alphaPc.toFixed(1);
    yParagraph.innerHTML = "Beta: " + betaPc.toFixed(1);
    zParagraph.innerHTML = "Gamma: " +gammaPc.toFixed(1);


    document.body.appendChild(xParagraph);
    document.body.appendChild(yParagraph);
    document.body.appendChild(zParagraph);
  });

window.addEventListener("load", init);