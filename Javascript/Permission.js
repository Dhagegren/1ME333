/*
Static class used to give permission from the user that the devices motionevents can be recorded for use in the application.
*/
var Permission = {


}
Permission.givePermission = function(){

    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(response => {
            if (response === 'granted') {
                //tar väck style på startknappen efter att den har gett
                View.add(ChooseDicePage);
                View.swap(1);
                window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
            }
        });
    }

    // View.add(ChooseDicePage);
    // View.swap(1);
  
}  

