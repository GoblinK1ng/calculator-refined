const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a/b;
}

const operate = function(a,b, operator){
    if (operator === '+') add(a,b);
    if (operator === '-') subtract(a,b);
    if (operator === '*') multiply(a,b);
    if (operator === '/') divide(a,b);
}



const buttons = document.querySelector(".buttons");
const screen = document.querySelector("#screen");
const nums = buttons.querySelectorAll(".number");

const display = function(thing){
    screen.textContent = thing;
}

nums.forEach((button) =>{
    button.addEventListener("click",()=>{
        display(button.getAttribute("id"));
        console.log(button.getAttribute("id"));
    })
})