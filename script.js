// let btac = document.querySelector(".ac");
// let btc = document.querySelector(".c");
// let btadd = document.querySelector(".add");
// let btmod = document.querySelector(".mod");
// let btdivide = document.querySelector(".divide");
// let btseven = document.querySelector(".seven");
// let bteight = document.querySelector(".eight");
// let btnine = document.querySelector(".nine");
// let btmul = document.querySelector(".mul");
// let btfour = document.querySelector(".four");
// let btfive = document.querySelector(".five");
// let btsix = document.querySelector(".six");
// let btsub = document.querySelector(".sub");
// let btone = document.querySelector(".one");
// let bttwo = document.querySelector(".two");
// let btzero = document.querySelector(".zero");
// let btdot = document.querySelector(".dot");
// let btequals = document.querySelector(".equals");

// // const addition = function(a,b){
// // return a + b;
// // };
// // console.log(addition(1,2));
// let result = 0;
// let currentInput = "";
// let operator = null ;

// let buttons = document.querySelectorAll("button");

// buttons.forEach(function(button){
// button.addEventListener("click", function(){
//     let value = button.textContent;
//     if(Number(value)){
//     currentInput = Number(value);
//     // currentInput += value;
//     console.log(currentInput);
//     }
//     else if(value === "+"){
//           result = Number(currentInput);
//           currentInput = "";
//           operator = "+";
//           console.log("+");
//     }

//     else if(value === "-"){
//           result = Number(currentInput)
//           currentInput = "";
//           operator = "-";
//           console.log("-");
//     }

//     else if(value === "*"){
//     result = Number(currentInput);
//     currentInput = "";
//     operator = "*";
//     console.log("*");
//     }
    
//     else if(value === "/"){
//     result = Number(currentInput);
//     currentInput = "";
//     operator = "/";
//     console.log("/");
//     }
    
// });
// });

// btequals.addEventListener("click", function(){
//     if(operator === "+"){
//         // result = Number(currentInput) - result
//         result += Number(currentInput);
//         console.log(result);
//         currentInput = "";
//     }
//         else if(operator === "-"){
//             result = result - Number(currentInput);
//             console.log(result);
//             currentInput = "";
//         }

//         else if(operator === "*"){
//             result = result * Number(currentInput);
//             console.log(result);
//             currentInput = "";
//         }

//         else if(operator === "/"){
//             result = result / Number(currentInput);
//             console.log(result);
//             currentInput = "";
//         }
// });


const allButtonsEL = document.querySelectorAll('.btn');
let strToDisplay = "";
const displayEl = document.querySelector('.display');

const operator = ["+", "-", "*", "/", "%", "."];

let lastOperator = "";

//Load Audio
// const audio = new Audio('./assets/click.mp3');

const buttonAction = function(value){
    console.log(value);
    displayEl.classList.remove("prank");
    if(value === "AC"){
            strToDisplay = "";
            return display(strToDisplay);
        }

    if(value === "=" || value === "Enter"){
        // return displayTotal();

        lastOperator = "";

        //get the last character

        const lastChar = strToDisplay[strToDisplay.length - 1];
        
        //check if it is one of the operator
        if(operator.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0, -1);
        }
        return displayTotal();
    }

        if(value === "C"){
            strToDisplay = strToDisplay.slice(0, -1);
            return display(strToDisplay);
        }

        //show only last clicked operator
    if(operator.includes(value)){

         lastOperator = value

        //get the last character
        const lastChar = strToDisplay[strToDisplay.length - 1];

        if(operator.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0, -1);
        }
    }                                                                                   

     if(value === "."){
        const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
        console.log(lastOperatorIndex);

        const lastNumberSet = strToDisplay.slice(lastOperatorIndex);
        console.log(lastNumberSet);

                if(!lastOperator && strToDisplay.includes(".")){
                   return;  
                }
        }

        strToDisplay += value;  
        display(strToDisplay);
    }

//foreach is high order function that take another function

allButtonsEL.forEach(function(btn){
btn.addEventListener("mousedown", () => {
    btn.style.scale = "0.9";
});

    btn.addEventListener("click", function(){
        btn.style.scale = "1";
        const value = btn.innerText;
        buttonAction(value);
    });
});

const display = function(str){
    displayEl.innerHTML = str || "0.0";
}

//calculate total

const displayTotal = function() {   

    const extraValue = randomValue();
    if(extraValue){
        displayEl.classList.add("prank");
        // audio.play();
    }
    const total = eval(strToDisplay) + extraValue;
    strToDisplay = total.toString();
    display(strToDisplay);
}

const randomValue = () => {
    const num = Math.round(Math.random() * 10); //0-10
    return num < 4 ? num : 0;
}

//binding keyboard with browser app

document.addEventListener("keypress", (e) => {
    console.log(e);
    const value = e.key;

    if(e.code.includes("Key")){
        return;
    }
    
    buttonAction(value);
});