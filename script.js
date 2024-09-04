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
    a = Number(a);
    b = Number(b);
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

const reset = function(id){
    if (id === '=') a = "", b = "", oper = null;
    else a = answer, b = "", oper = id;
}


nums.forEach((button) =>{
    button.addEventListener("click",()=>{
        let id = button.getAttribute("id")
        console.log(a,b,oper);
        console.log(" ");
        if (((id === '=' || operators.includes(id)) && 
        oper !== null && a !== "" && b !== "")){
            let answer = operate(a,b,oper)
            display(answer);
            
            reset(id);
        }
        
        else{
            if (id === "=") reset(id);
            else if (operators.includes(id)) {
                oper = id;
                display(oper); 
            } 
            else if (oper === null){
                a += id;
                display(a);
            }
            else if (oper !== null) {
                b += id;
                display(b);
            }
            
        }
        console.log(a,b,oper);
    })
})