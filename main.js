function displayClicks() {
const buttons = document.querySelectorAll(".btn");
const textAera = document.querySelector("#window");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        textAera.innerText = textAera.innerText +btn.innerText;
        let text = textAera.innerText;
    });
});
}


function back() {
    const textAera = document.querySelector("#window");
    let text = textAera.innerText;
    let result = text.slice(0, -1);
    textAera.innerText = result;
}


function operate() {
    const textAera = document.querySelector("#window");
    let text = textAera.innerText;
    let chars = ["+", "-", "/", "*"];
    let operatorPoint = [];

    chars.forEach(char => {
        if (text.includes(char)) {
            operatorPoint.push(char);
        }
    });

    let operatorPointPlace = text.indexOf(operatorPoint);
    let firstNumber = text.slice(0, operatorPointPlace);
    let secondNumber = text.slice(operatorPointPlace+1);
    let operator = operatorPoint.shift(); // + - / *

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    if (operator == "+" ) {
        let sum = a + b;
        textAera.innerText = sum;
    } else if (operator === "-") {
        let sum = a - b;
        textAera.innerText = sum;     
    } else if (operator === "*") {
        let sum = a * b;
        textAera.innerText = sum;
    } else if (firstNumber / secondNumber && secondNumber == 0) {
        alert("Don't divide by 0!!!");
    } else if (operator === "/") {
        let sum = a / b;
        textAera.innerText = sum;
    } 
}

function clear () {
    location.reload();
}


displayClicks();
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("back").addEventListener("click", back);
document.getElementById("enter").addEventListener("click", operate);