const onloads = document.querySelector(".onload");
const load = document.querySelector(".load");
const text1 = document.querySelector(".textLoad1");
const text2 = document.querySelector(".textLoad2");
const switchImg = document.querySelector(".switchImg");

const canvasConfetti = document.querySelector("#world");
const audio = new Audio("Backsound.mp3");

const textLoad = `Ish... Mati lampu`;
const textLoad2 = "Nyalain lampunya !";
let j = 0;
let k = 0;

window.addEventListener("load", () => {
    onloads.style.display = "none";
    setTimeout(typeLoad, 1000);
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("switchImg")) {
        load.style.opacity = "0";
        audio.play();
        setTimeout(() => {
            load.style.display = "none";
            splashConfetti();
        }, 500);
    }
    console.log(e.target.classList);
});

function typeLoad() {
    if (j < textLoad.length) {
        text1.innerHTML += textLoad.charAt(j);
        j++;

        setTimeout(typeLoad, 90);
    } else {
        setTimeout(typeLoad2, 1000);
    }
}

function typeLoad2() {
    if (k < textLoad2.length) {
        text2.innerHTML += textLoad2.charAt(k);
        k++;
        setTimeout(typeLoad2, 100);
    } else {
        setTimeout(() => (switchImg.style.display = "block"), 1000);
    }
}
