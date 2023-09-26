const ADD = '+';
const SUB = '-';
const MULT = '×';
const DIV = '÷';

const States = {
    Dig1: 0,
    Op: 1,
    Dig2: 2,
    Eq: 3,
    Start: 4
}

let answer = 0;
let sNum1 = "";
let num1 = 0;
let sNum2 = "";
let num2 = 0;
let currOp = null;
let myState = States.Start;

const calculator = document.getElementById("calculator");
const disp = calculator.querySelector("#display");
const btns = calculator.querySelectorAll("button");

function reset(){
    answer = 0;
    sNum1 = "";
    sNum2 = "";
    num1 = 0;
    num2 = 0;
    currOp = null;
    myState = States.Start;
    disp.innerHTML="PRESS NUMBER TO START";
}

function digPressed(id){
    console.log("digPressed" + id);
    switch(myState) {
        case States.Start:
            sNum1 = id;
            myState = States.Dig1;
            disp.innerHTML = id;
            break;
        case States.Dig1:
            sNum1 += id;
            myState = States.Dig1;
            disp.innerHTML += id;
            break;
        case States.Op:
            sNum2 = id;
            myState = States.Dig2;
            disp.innerHTML += id;
            break;
        case States.Dig2:
            sNum2 += id;
            myState = States.Dig2;
            disp.innerHTML += id;
            break;
        case States.Eq:
            sNum1 = id;
            myState = States.Dig1;
            disp.innerHTML += id;
            break;
        default:
            reset();
            throw new Error("uncaught operation")
    }
}

function add(){
    return num1 + num2;
}
function subtract(){
    return num1 - num2;
}
function multiply(){
    return num1 * num2;
}
function divide(){
    return num1/num2;
}

function opPressed(id){

    switch(myState) {
        case States.Start:
            num1 = 0;
            disp.innerHTML = "0";
            myState = States.Op;
            break;
        case States.Dig1:
            num1 = parseFloat(sNum1);
            sNum1 = "";
            myState = States.Op;
            break;
        case States.Op:
            //error
            reset();
            return;
        case States.Dig2:
            ansPressed();
            myState = States.Op;
            break;
        case States.Eq:
            num1 = parseFloat(sNum1);
            sNum1 = "";
            myState = States.Op;
            break;
        default:
            throw new Error("uncaught operation")
    }

    switch(id) {
        case "add":
            currOp = add;
            disp.innerHTML += "+";
            break;
        case "subtract":
            currOp = subtract;
            disp.innerHTML += "-";
            break;
        case "multiply":
            currOp = multiply;
            disp.innerHTML += "*";
            break;
        case "divide":
            currOp = divide;
            disp.innerHTML += "/";
            break;
        default:
            throw new Error("uncaught operation")
    }
}

function ansPressed(){
    if (currOp != null){
        num2 = parseFloat(sNum2);
        num1 = currOp();
    }
    sNum1 = num1.toString();
    disp.innerHTML=sNum1;
    num2 = 0;
    sNum2 = "";
    ans = 0;
    currOp = null;
    myState = States.Eq;
    console.log(ans);
}

for(const btn of btns){
    const bClass = btn.getAttribute('class');
    const bId = btn.getAttribute('id');
    switch (bClass){
        case "digit":
            btn.addEventListener("click", () => {digPressed(bId)});
            //console.log(bId)
            break;
        case "op":
            btn.addEventListener("click", () => {opPressed(bId)});
            break
        case "ans":
            btn.addEventListener("click", () => {ansPressed()});
            break;
        default:
            console.log(bClass + bId + "button not taken care of");
    }
}
