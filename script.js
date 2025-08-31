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

const operator = ["+", "-", "*", "/", "%"];

const buttonAction = function(value){
    console.log(value);
    if(value === "AC"){
            strToDisplay = "";
            return display(strToDisplay);
        }

    if(value === "="){
        // return displayTotal();

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

        if(value === "."){
                strToDisplay = strToDisplay.replace('..', '.');
                console.log(strToDisplay);
                return display(strToDisplay);
        }

        //show only last clicked operator
    if(operator.includes(value)){
        //get the last character
        const lastChar = strToDisplay[strToDisplay.length - 1];

        if(operator.includes(lastChar)){
            strToDisplay = strToDisplay.slice(0, -1);
        }
    }

        strToDisplay += value;  
        display(strToDisplay);
    }

    

//foreach is high order function that take another function

allButtonsEL.forEach(function(btn){
    btn.addEventListener("click", function(){
        const value = btn.innerText;
        buttonAction(value);
    });
});

const display = function(str){
    displayEl.innerHTML = str || "0.0";
}

//calculate total

const displayTotal = function() {   
    const total = eval(strToDisplay);
    strToDisplay = total.toString();
    display(strToDisplay);
}
