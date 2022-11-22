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
    // window.requestAnimationFrame(updateCanvas)
}


function abc(){
    const datauri = Canvas.toDataURL();
    console.log(datauri);
    const cc = document.querySelector("#imgimg");
    cc.src = datauri;


}
function abcd(){
  if (window.navigator.msSaveBlob){
    window.navigator.msSaveBlob(Canvas.msToBlob(),"downloading.png");
  }
  else{
    const a  = document.createElement("a");
    document.body.appendChild(a);
    a.href = Canvas.toDataURL();
    a.download = "downloading.png";
    a.click();
  }

}

// const cc = document.querySelector("#Capt");
// cc.addEventListener("click",function(){
//     const datauri = Canvas.toDataURL();
//     console.log(datauri);
// })
// var png = ReImg.fromCanvas(document.getElementById('idCanvas')).toPng();