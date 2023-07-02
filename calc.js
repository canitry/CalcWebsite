let answer = 0;
let currOp = null;
const calculator = document.querySelector("#calculator");
const disp = calculator.querySelector("#display");
const btns = calculator.querySelectorAll(".digit, .op, .ans");
for(const btn of btns){
    const bClass = btn.getAttribute('class');
    const bId = btn.getAttribute('id');
    switch (bClass){
        case ".digit":
            btn.addEventListener("click", digPressed(bId));
            break;
        case ".op":
            btn.addEventListern("click", opPressed(bId));
            break
        case ".ans":
            btn.addEventListener("click", ansPressed(bId));
            break;
        default:
            print("button not taken care of");
    }
}

function digPressed(id){
    
}

function opPressed(id){
    currOp = id;
}

function ansPressed(id){

}