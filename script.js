let Video = null; 
let Canvas = null; 
let Contex = null; 


function main(){
    Canvas = document.getElementById("idCanvas");
    Contex = Canvas.getContext("2d");
        Canvas.width = window.innerWidth;
        Canvas.height = window.innerHeight;
        let promise = navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    facingMode: 'environment'
  }
})
    promise.then(function(signal){
    Video = document.createElement("video");
    Video.srcObject = signal;
    Video.play();
    Video.onloadeddata = function(){
        updateCanvas();
    }
    }).catch(function(err){
        alert("Camera Error:"+err);
    });
    
}
function updateCanvas(){
    Contex.drawImage(Video,0,0);
    window.requestAnimationFrame(updateCanvas)
}