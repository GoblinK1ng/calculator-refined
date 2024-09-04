
//Operations to be performed
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//figure out which operation to do
const operate = function(a,b, operator){

    //converts the arguments into Numbers
    a = Number(a);
    b = Number(b);
    answer = 0;

    //check and do which operation
    if (operator === '+') answer = add(a,b);
    if (operator === '-') answer = subtract(a,b);
    if (operator === '*') answer = multiply(a,b);
    if (operator === '/') {

        //check if dividing by 0, if so then send funny message
        if (b === 0) answer = "...";
        else answer = divide(a,b);
    }

    //Check if answer would overflow the screen, if so then convert to Exponential
    if (answer.toString().length > 9)
        answer = Number.parseFloat(answer).toExponential(2);
    return answer;
}


//Get references to the document
const buttons = document.querySelector(".buttons");
const screen = document.querySelector("#screen");
const nums = buttons.querySelectorAll(".number, .sign");

//values for operations, operation itself
let a = "", b = "", oper = null;

//array of possible operators
const operators = ['+','-','/','*'];

//displays whatever value needs to be displayed
const display = function(thing){
    screen.textContent = thing;
}

//resets all values
const reset = function(){
    a = "", b = "", oper = null;
    
}

//Define what happens when on of the buttons are clicked
nums.forEach((button) =>{
    button.addEventListener("click",()=>{

        //Get Value of button clicked
        let id = button.getAttribute("id")
        
        //Checks if CLR button is clicked, clears values and displays that it is cleared
        if (id === "CLR") {reset(); display(id);}

        //Checks if = or an operator is clicked, and if its done with the proper requirements
        else if (((id === '=' || operators.includes(id)) && 
        oper !== null && a !== "" && b !== "")){

            //Call operation and display answer
            let answer = operate(a,b,oper);
            display(answer);
            
            //if '=' was clicked, we reset, if not then keep the answer and continue
            if (id === '=') reset();
            else a = answer, b = "", oper = id;
        }
        
        else{
            //checks if '=' is clicked without sufficient operands
            if (id === "=") reset();

            //checks, sets and displays operator
            else if (operators.includes(id)) {
                oper = id;
                display(oper); 
            } 

            //checks, sets and displays first operand
            else if (oper === null){
                a += id;
                display(a);
            }

            //checks, set and display second operand
            else if (oper !== null) {
                b += id;
                display(b);
            }
            
        }
        
    })
})