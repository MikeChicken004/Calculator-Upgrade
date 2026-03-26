//sets every buttons to have specific values. The buttons will be align in this order
const buttonValues = [
    "/", "%", "DE", "AC",
    "*", "7", "8", "9", 
    "-", "4", "5", "6", 
    "+", "1", "2", "3", 
    "=", "0", "00", "." 
];

//Symbols on the right, mainly the operators
const rightSymbols = ["/", "*", "-", "+", "="];
//Whats on top
const topSymbols = ["%", "DE"];
//Clear button
const clearSymbols = ["AC"];

//Display input
const display = document.getElementById("display");

//Variables for num1 num2 and operator
let A = 0;
let operator = null;
let B = null;

//clears display
function clearAll() {
    A = null;
    operator = null;
    B = null;
    
}

//starts button with value of i
for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;
    
    if (value == "0") {

    }
    else if (rightSymbols.includes(value)) {
           
    }
    else if(clearSymbols.includes(value)) {        
        button.style.backgroundColor = "#E15656";//makes clear button red
    }
    
    //process button clicks

    button.addEventListener("click", function() { 
        if (rightSymbols.includes(value)) { 
            if (value == "=") {
                //calculate function basically
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "/") {
                        display.value = numA/numB;
                    }
                    else if (operator == "*") {
                        display.value = numA*numB;
                    }
                    else if (operator == "-") {
                        display.value = numA-numB;
                    }
                    else if (operator == "+") {
                        display.value = numA+numB;
                    }
                    clearAll();
                }
            }
            else {
                operator = value; 
                A = display.value;
                display.value = "";
                //displays numA
            }
        }
        else if (clearSymbols.includes(value)) { 
            if (value == "AC") {
                clearAll();
                display.value = "";
                //clears screen, sets variables back to original state
            }
        }
        else if (topSymbols.includes(value)) {
            if (value == "DE") {
                display.value = display.value.toString().slice(0,-1)
                document.getElementById('display').innerHTML = display.value;
                //backspace
            }
            else if (value == "%") {
                display.value = Number(display.value) / 100;
                //instead of writing 10%, it displays 0.10
            }
        }
       
        else { 
            if (value == ".") { //decimals
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            else if (display.value == "0") { //If no number is put, 0 can't repeat like 000000
                display.value = value;
            }
                else if(display.value == "00") {
                display.value = "0";
            }
            else {
                display.value += value;
            }
        }
    });


    document.getElementById("buttons").appendChild(button);// appends the buttons to the screen
    }