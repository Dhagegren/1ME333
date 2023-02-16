
  


function init(){
    console.log("hej");
    handleMotionEvent();
   
}


function handleMotionEvent(event) {
    const x = event.acceleration.x;
    const y = event.acceleration.y;
    const z = event.acceleration.z;

   var tag = document.getElementsByTagName("p");
   tag.innerHTML = x;
   console.log(x);
   console.log(y);
   console.log(z);

   console.log("hej");



    // Do something awesome.
}
window.addEventListener("load", init);

window.addEventListener("devicemotion", handleMotionEvent, true);