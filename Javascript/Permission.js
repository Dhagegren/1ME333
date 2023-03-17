//Klassen ger har en funktion som ger en prompt till användaren som måste godkänna att rörelsesensorer används.
var Permission = {


}
Permission.givePermission = function(){

      if (typeof DeviceMotionEvent.requestPermission === 'function') {
          DeviceMotionEvent.requestPermission().then(response => {
              if (response === 'granted') {
                  View.add(ChooseDicePage);
                  View.swap(1);
                  window.dispatchEvent(new DeviceMotionEvent('devicemotion'));
              }
          });
      }
}

