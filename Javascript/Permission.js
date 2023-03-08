/*
Static class used to give permission from the user that the devices motionevents can be recorded for use in the application.
*/
var Permission = {


}
Permission.givePermission = function(){
    // if (typeof DeviceMotionEvent.requestPermission === 'function') {
    //     DeviceMotionEvent.requestPermission().then(response => {
    //         if (response === 'granted') {
    //             //tar väck style på startknappen efter att den har gett
    //             var startbtn =document.getElementById("startBtn");
    //             startbtn.style.display="none";
                    View.add(ChooseDicePage);
                    View.swap(1);
    //             var choose = new ChooseDicePage(); 
    //             window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
    //         }
    //     });
    // }
  
}  

