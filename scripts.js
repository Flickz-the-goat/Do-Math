const butt = document.querySelector(".butt"); //the div with the buttons
const buttonLabels = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".","=", " "
];
let index = 0; 
for(let i = 0; i < 5; i++){ //add the spaces to put in the buttons
    const space = document.createElement("div");
    space.classList.add("space");
    if(i === 4){
        space.id = "last"; 
    }
    butt.appendChild(space); 
    addButtons(space); 
}
function addButtons(space){
    for(let i = 0; i < 4; i++){  //add the buttons into the space
        const button = document.createElement("div");
        button.classList.add("button");
        if(i === 3){
            button.id = "bLast"; 
        }
        space.appendChild(button);
        addLabel(button, index); 
        index++; 
    }
}
function addLabel(button, index){
    const label = document.createElement("p"); 
    label.classList.add("label");
    label.textContent = buttonLabels[index]; 
    button.appendChild(label); 
}
index = 0; 
//remove the last button and do some extra styling
const last = document.querySelector("#last");
let remove = document.querySelectorAll("#bLast");
last.removeChild(remove[4]); 
last.lastChild.id = "bLast";
remove = document.querySelectorAll("#bLast"); 
remove.forEach((remove)=>{
    remove.style.backgroundColor = "#134b5f"; 
});
//all the math functions 
let n1 = null; 
let n2 = null;
let operator = null; 
const screen = document.querySelector(".screen"); 

function divide(){
    return n1/n2; 
}
function multiply(){
    return n1 * n2; 
}
function subtract(){
    return n1-n2;
}
function add(){
    return n1 + n2;
}
function modulo(){
    return n1 % n2; 
}
function equate(){
    switch (operator){
        case "+":
            add(); 
            break;
        case "-":
            subtract();
            break; 
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        default:
            modulo();
    }
    operator = null; reset 
}
remove.forEach((remove)=>{
    switch (index){
        case 0:
            remove.addEventListener("click", ()=>{
                if(operator == null){
                    screen.lastChild.textContent = "/"; 
                }
                operator = "/";
            });
            break; 
        case 1:
            remove.addEventListener("click", ()=>{
                if(operator == null){
                    screen.lastChild.textContent = "*"; 
                }
                operator = "*";
            });
            break; 
        case 2:
            remove.addEventListener("click", ()=>{
                if(operator == null){
                    screen.lastChild.textContent = "-"; 
                }
                operator = "-";
            });
            break; 
        case 3:
            remove.addEventListener("click", ()=>{
                if(operator == null){
                    screen.lastChild.textContent = "+"; 
                }
                operator = "+";
            });
            break; 
        case 4:
            remove.addEventListener("click", ()=>{
                equate(); 
            });
            break; 
    }
    index++; 
});