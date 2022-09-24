//create an object to keep track of values 
const Calculator = {
    //this will dispay 0 on the calculator screen
    Display_Value: "0",
    //This will hold the first operans for any expressions, we set it all to null for now
    First_Operand: null,
    //This checks whether or not the second operand has been inputted by a user
    Wait_Second_Operand: false,
    //This will hold the operator, set it to null for now 
    operator: null,
};

//this modifies value each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //this checks if the value Wait_Second_Operand is true and set Display_Value
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // this overwrites Display_Value if the current value is 0
        //otherwise it adds onto it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

// this section handles decimal points 
function input_Decimal(dot) {
    //this ensures that accident clicking of the decimal point doesnt 
    //cause bugs in the operator
    if(Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //it is saying that if the Display_Value does not contain a decimal point
        // then add decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators 
function Handle_Operator (Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    // when an operators key is pressed we convert the current number 
    //displayed on the screen to a number and then store the result in 
    //Calculator.First_Operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exist and if Wait_Second_operand is true
    //then update the operator and exit from the function 
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if a operator already exist
        const Value_Now = First_Operand || 0;
        //if operator exist, properly lookup is performed for the operator
        //in the Perform_Calculator object and the function that matches the
        //operator is excuted
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after the decimal 
        result = Number(result).toFixed (9);
        //this will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// this function updates the calculator screen with the contents of Display_Value
function Update_Display(){
    //Makes use of the calculator-screeb class to target
    //input tag in the HTML document
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value; 
}

Update_Display();


//this section monitors button clicks 
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variables is an object that represents the element 
    // that was clicked 
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function 
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }

    if (target.classList.contains("decimal")) {
        input_Decimal(target.value);
        Update_Display();
        return;
    }

    //ensures that AC clears all inputs from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})