//klikam na cyfre i ona sie pojawia w oknie
//clear = restart ekranu

function displayClicks() {
const buttons = document.querySelectorAll(".btn");
const textAera = document.querySelector("#window");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        textAera.innerText += btn.innerText;
    });
});
}

displayClicks();

function clear () {
    location.reload();
}

document.getElementById("clear").addEventListener("click", clear);