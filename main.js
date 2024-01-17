let firstNumber = {};
let secondNumber = {};
let operatorPoint = {};
let operatorPointPlace = {};


function displayClicks() {
const buttons = document.querySelectorAll(".btn");
const textAera = document.querySelector("#window");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        textAera.innerText = textAera.innerText +btn.innerText;
        let text = textAera.innerText;
        console.log(text);
        console.log(typeof(text));
    });
});
}

function back() {
    const textAera = document.querySelector("#window");
    let text = textAera.innerText;
    let result = text.slice(0, -1);
    textAera.innerText = result;
}


function findTheNumbers() {
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
    console.log(operatorPoint);
    console.log(operatorPointPlace);
    let firstNumber = text.slice(0, operatorPointPlace);
    console.log(firstNumber);
    let secondNumber = text.slice(operatorPointPlace+1);
    console.log(secondNumber);
}

// function test() {
//     const textAera = document.querySelector("#window");
//     let text = textAera.innerText;
//     let chars = ["+", "-", "/", "*"];
//     let usedChar = [];

//     chars.forEach(char => {
//         if (text.includes(char)) {
//             usedChar.push(char);
//         }
//     });

//     console.log(usedChar);
// }



function operate(operatorPoint) {
findTheNumbers();
    if (operatorPoint === "+") {
        adding();
    } else if (operatorPoint === "-") {
        minus();
    } else if (operatorPoint === "*") {
        multiplay();
    } else if (operatorPoint === "/") {
        divide();
    }
}

// Math functions
function adding(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    console.log(sum);
}

function minus(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplay(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (firstNumber / 0) {
        alert("Don't divide by 0!!!");
    } else {
        return firstNumber / secondNumber;
    }
}
//



function clear () {
    location.reload();
}


displayClicks();
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("back").addEventListener("click", back);
document.getElementById("enter").addEventListener("click", operate);