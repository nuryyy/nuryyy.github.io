const buttNext = document.querySelector(".nextContent");
const content2 = document.querySelector(".content2");
const paper = document.querySelector(".paper");
// TYPE WRITE PROPERTY
const textArea = document.querySelector(".pesan");
const message = `~ untuk: Nury Rachma Dhiani βΊοΈπ‘

Halo Nury yang tirus... Yang mancung...π
SELAMAT ULANG TAHUN YA !!! π
Semoga di umurmu yang sekarang bertambah tua ini kamu mendapat banyak berkah, bahagia selalu, tidak cengeng lagi, makin pinter, makinππ pokoknya
Ammin......πβ¨π 

                                       ~ Dari: galak π`;
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
