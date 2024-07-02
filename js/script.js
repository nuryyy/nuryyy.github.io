const buttNext = document.querySelector(".nextContent");
const content2 = document.querySelector(".content2");
const paper = document.querySelector(".paper");
// TYPE WRITE PROPERTY
const textArea = document.querySelector(".pesan");
const message = `~ untuk: Nury Rachma Dhiani ☺️🐡
haloo...selamat ulang tahun yaa🥳🥳🥳 
selamat giginya udah rata kwkwk.
semoga sehat selalu, kuliah nya lancar, dan dapet temen-temen yang baik ammin.
semangat terus ya anak rantau 💥🎊🎉🌟⭐


                                    dari: santoso 🐈`;
let i = 0;
// ================

buttNext.addEventListener("click", () => {
    content2.style.display = "block";
    setTimeout(typeWrite, 1500);
});
document.addEventListener("click", (e) => {
    if (e.target == content2) {
        content2.style.display = "none";
    }
});

function typeWrite() {
    if (i < message.length) {
        textArea.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWrite, 55);
    }
}
