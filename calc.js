function digPressed(id){
    console.log("digPressed" + id)
}

function opPressed(id){
    currOp = id;
}

function ansPressed(id){

}

let answer = 0;
let currOp = null;
const calculator = document.getElementById("calculator");
const disp = calculator.querySelector("#display");
const btns = calculator.querySelectorAll("button");
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
            btn.addEventListener("click", () => {ansPressed(bId)});
            break;
        default:
            console.log(bClass + bId + "button not taken care of");
    }
}