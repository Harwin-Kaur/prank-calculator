let btac = document.querySelector(".ac");
let btc = document.querySelector(".c");
let btadd = document.querySelector(".add");
let btmod = document.querySelector(".mod");
let btdivide = document.querySelector(".divide");
let btseven = document.querySelector(".seven");
let bteight = document.querySelector(".eight");
let btnine = document.querySelector(".nine");
let btmul = document.querySelector(".mul");
let btfour = document.querySelector(".four");
let btfive = document.querySelector(".five");
let btsix = document.querySelector(".six");
let btsub = document.querySelector(".sub");
let btone = document.querySelector(".one");
let bttwo = document.querySelector(".two");
let btzero = document.querySelector(".zero");
let btdot = document.querySelector(".dot");
let btequals = document.querySelector(".equals");

// const addition = function(a,b){
// return a + b;
// };
// console.log(addition(1,2));
let result = 0;
let currentInput = "";
let operator = null ;

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
button.addEventListener("click", function(){
    let value = button.textContent;
    if(Number(value)){
    currentInput = Number(value);
    // currentInput += value;
    console.log(currentInput);
    }
    else if(value === "+"){
          result = Number(currentInput);
          currentInput = "";
          operator = "+";
          console.log("+");
    }

    else if(value === "-"){
          result = Number(currentInput)
          currentInput = "";
          operator = "-";
          console.log("-");
    }

    else if(value === "*"){
    result = Number(currentInput);
    currentInput = "";
    operator = "*";
    console.log("*");
    }
    
    else if(value === "/"){
    result = Number(currentInput);
    currentInput = "";
    operator = "/";
    console.log("/");
    }
    
});
});

btequals.addEventListener("click", function(){
    if(operator === "+"){
        // result = Number(currentInput) - result
        result += Number(currentInput);
        console.log(result);
        currentInput = "";
    }
        else if(operator === "-"){
            result = result - Number(currentInput);
            console.log(result);
            currentInput = "";
        }

        else if(operator === "*"){
            result = result * Number(currentInput);
            console.log(result);
            currentInput = "";
        }

        else if(operator === "/"){
            result = result / Number(currentInput);
            console.log(result);
            currentInput = "";
        }
});