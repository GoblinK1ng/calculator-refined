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
    answer = 0;
    if (operator === '+') answer = add(a,b);
    if (operator === '-') answer = subtract(a,b);
    if (operator === '*') answer = multiply(a,b);
    if (operator === '/') {
        if (b === 0) answer = "...";
        else answer = divide(a,b);
    }
    if (answer.toString().length > 9)
        answer = Number.parseFloat(answer).toExponential(2);
    return answer;
}



const buttons = document.querySelector(".buttons");
const screen = document.querySelector("#screen");
const nums = buttons.querySelectorAll(".number, .sign");

let a = "", b = "", oper = null;
const operators = ['+','-','/','*'];

const display = function(thing){
    screen.textContent = thing;
}

const reset = function(){
    a = "", b = "", oper = null;
    
}


nums.forEach((button) =>{
    button.addEventListener("click",()=>{
        let id = button.getAttribute("id")
        console.log(a,b,oper);
        console.log(" ");
        if (id === "CLR") reset();
        if (((id === '=' || operators.includes(id)) && 
        oper !== null && a !== "" && b !== "")){
            let answer = operate(a,b,oper);
            display(answer);
            
            if (id === '=') reset();
            else a = answer, b = "", oper = id;
        }
        
        else{
            if (id === "=") reset();
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