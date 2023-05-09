// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const expose = document.getElementById("expose");
  const horn-select = document.getElementById("horn-select"); 
  const volume = document.getElementById("volume");
  const horn-image = expose.querySelector("img");
  const volumesrc = document.getElementsByClassName("hidden")[0];
  const volume-controls = document.getElementById("volume-controls");
  const volume-icon = volume-controls.querySelector("img");
  const button = document.querySelector("button");
  const audio = expose.querySelector("audio");

  horn-select.addEventListener("change", (event) => {
      if(horn-select.value == "air-horn"){
        horn-image.src = "assets/images/air-horn.svg";
        volumesrc.src = "assets/audio/air-horn.mp3";
      }
      else if(horn-select.value == "car-horn"){
        horn-image.src = "assets/images/car-horn.svg";
        volumesrc.src = "assets/audio/car-horn.mp3";
      }
      else if(horn-select.value == "party-horn"){
        horn-image.src = "assets/images/party-horn.svg";
        volumesrc.src = "assets/audio/party-horn.mp3";
      }
  })

  volume.addEventListener("change", (event) => {
    if(volume.value ==0){
      volume-icon.src="assets/icons/volume-level-0.svg";
    }
    else if(volume.value < 33){
      volume-icon.src="assets/icons/volume-level-1.svg";
    }
    else if(volume.value < 67){
      volume-icon.src="assets/icons/volume-level-2.svg";
    }
    else{
      volume-icon.src="assets/icons/volume-level-3.svg";
    }
  })

  button.addEventListener("click", (event) => {
    audio.play;
  })
}