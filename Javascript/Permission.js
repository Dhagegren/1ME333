/*
Static class used to give permission from the user that the devices motionevents can be recorded for use in the application.
*/
var Permission = {


}
Permission.givePermission = function(){
   // var choose = new ChooseDicePage(); 
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(response => {
            if (response === 'granted') {
                window.location.replace ="chooseDicePage.html";
                var choose = new ChooseDicePage(); 
                window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
            }
        });
    }
  
}  

