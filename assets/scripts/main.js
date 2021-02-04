var button = document.getElementById("honk-btn");
var slider = document.getElementById("volume-slider");
var vol_num = document.getElementById("volume-number");
var vol_icon = document.getElementById("volume-image");
var radio_air = document.getElementById("radio-air-horn");
var radio_car = document.getElementById("radio-car-horn");
var radio_party = document.getElementById("radio-party-horn");
var sound_img = document.getElementById("sound-image");
var horn = document.getElementById("horn-sound");

const images = "./assets/media/images"
const icons = "./assets/media/icons"
const audio = "./assets/media/audio"

function playSound(){
    horn.play();
}

function selectAir(){
    sound_img.setAttribute("src", images + "/air-horn.svg");
    horn.setAttribute("src", audio + "/air-horn.mp3");
}

function selectCar(){
    sound_img.setAttribute("src", images + "/car.svg");
    horn.setAttribute("src", audio + "/car-horn.mp3");
}

function selectParty(){
    sound_img.setAttribute("src", images + "/party-horn.svg");
    horn.setAttribute("src", audio + "/party-horn.mp3");
}

function updateIcon(volumeLevel){
    button.disabled = false;
    horn.volume = volumeLevel/100;
    if(volumeLevel > 66){
        vol_icon.setAttribute("src", icons + "/volume-level-3.svg");
    }
    else if (volumeLevel > 33){
        vol_icon.setAttribute("src", icons + "/volume-level-2.svg");
    }
    else if (volumeLevel > 0){
        vol_icon.setAttribute("src", icons + "/volume-level-1.svg");
    }
    else{
        vol_icon.setAttribute("src", icons + "/volume-level-0.svg");
        button.disabled = true;
    }
}

function sliderUpdate(){
    vol_num.setAttribute("value", slider.value);
    updateIcon(slider.value);
}

function numberUpdate(){
    slider.setAttribute("value", vol_num.value);
    updateIcon(vol_num.value);
}
button.type = "button";
button.addEventListener("click", playSound);
slider.addEventListener("input", sliderUpdate);
vol_num.addEventListener("input", numberUpdate);
radio_air.addEventListener("input", selectAir);
radio_car.addEventListener("input", selectCar);
radio_party.addEventListener("input", selectParty);
