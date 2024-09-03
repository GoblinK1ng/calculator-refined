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
    if (operator === '+') return add(a,b);
    if (operator === '-') return subtract(a,b);
    if (operator === '*') return multiply(a,b);
    if (operator === '/') return divide(a,b);
}



const buttons = document.querySelector(".buttons");
const screen = document.querySelector("#screen");
const nums = buttons.querySelectorAll(".number, .sign");

let a = "", b = "", oper = null;
const operators = ['+','-','/','*'];

const display = function(thing){
    screen.textContent = thing;
}




nums.forEach((button) =>{
    button.addEventListener("click",()=>{
        let id = button.getAttribute("id")
        
        if (id === '=' && oper !== null && a !== "" && b !== ""){
            a = Number(a);
            b = Number(b);
            
            display(operate(a,b,oper));
            a = "", b = "", oper = null;
        
        }
        else{
            if (operators.includes(id)) oper = id;
                
            else if (oper === null)a += id;
            
            else if (oper !== null) b += id;

            
            
            console.log(a);
            console.log(b);
            display(id);
            console.log(id);
        }
    })
})