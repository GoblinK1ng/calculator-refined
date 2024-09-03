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
const nums = buttons.querySelectorAll(".number");

nums.forEach((button) =>{
    button.addEventListener("click",()=>{
        console.log(button.getAttribute("id"));
    })
})