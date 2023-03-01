/*
Static class used to give permission from the user that the devices motionevents can be recorded for use in the application.
*/
var Permission = {


}
Permission.givePermission = function(){
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(response => {
            if (response === 'granted') {
                window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
                

                var hej = document.createElement("p");
                hej.textContent = "hejsan";
                document.body.appendChild(hej);
                var choose = new ChooseDicePage(); 


            }
        });
    }
  
}  

