const butt = document.querySelector(".butt"); //the div with the buttons
const buttonLabels = [
    "AC", "+/-", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".","="
];
let index = 0; 
for(let i = 0; i < 5; i++){ //add the spaces to put in the buttons
    const space = document.createElement("div");
    space.classList.add("space");
    butt.appendChild(space); 
    addButtons(space); 
}
function addButtons(space){
    for(let i = 0; i < 4; i++){  //add the buttons into the space
        if(index != buttonLabels.length){
            const button = document.createElement("div");
            button.classList.add("button");
            space.appendChild(button);
            addLabel(button, index); 
            index++; 
        }
    }
}
function addLabel(button, index){
    const label = document.createElement("p"); 
    label.classList.add("label");
    button.classList.add(buttonLabels[index]); 
    label.textContent = buttonLabels[index]; 
    button.appendChild(label); 
}
const space = document.querySelectorAll(".space");
space.forEach((space)=>{
    space.lastChild.style.backgroundColor = "#0f3c4c"; 
});
index = 0;  
//all the math functions 
let n1 = null; 
let n2 = null;
let result = null; 
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
            result = add(); 
            break;
        case "-":
            result = subtract();
            break; 
        case "*":
            result = multiply();
            break;
        case "/":
            result = divide();
            break;
        default:
            result = modulo();
    }
    screen.lastChild.textContent = Math.round(result); 
    n1 = result; //for future additions
    operator = null; //reset 
}
space.forEach((space)=>{
    switch (index){
        case 0:
            space.lastChild.addEventListener("click", ()=>{
                if(screen.lastChild.textContent != ""){
                    n1= parseInt(screen.lastChild.textContent); 
                    screen.lastChild.textContent = ""; 
                }
                operator = "/";
            });
            break; 
        case 1:
            space.lastChild.addEventListener("click", ()=>{
                if(screen.lastChild.textContent != ""){
                    n1= parseInt(screen.lastChild.textContent); 
                    screen.lastChild.textContent = ""; 
                }
                operator = "*";
            });
            break; 
        case 2:
            space.lastChild.addEventListener("click", ()=>{
                if(screen.lastChild.textContent != ""){
                    n1= parseInt(screen.lastChild.textContent); 
                    screen.lastChild.textContent = ""; 
                }
                operator = "-";
            });
            break; 
        case 3:
            space.lastChild.addEventListener("click", ()=>{
                if(screen.lastChild.textContent != ""){
                    n1= parseInt(screen.lastChild.textContent); 
                    screen.lastChild.textContent = ""; 
                }
                operator = "+";
            });
            break; 
        case 4:
            space.lastChild.addEventListener("click", ()=>{
                if(screen.lastChild.textContent != ""){
                    n2 = parseInt(screen.lastChild.textContent);
                    if(n1 != null && operator != null) {
                        equate();
                    }
                }
            });
            break; 
    }
    index++; 
});
index = 0; 
//adding clicks for all the numbers
const button = document.querySelectorAll(".button");
button.forEach((button)=>{
    let arr = ["*", "+", "-", "/", "=", "%", "AC", "+/-"];
    if(!arr.includes(button.classList[1]))
        button.addEventListener("click", ()=>{
            screen.lastChild.textContent += button.classList[1]; 
            if(operator != null){
                n2 = parseInt(screen.lastChild.textContent);
            }
            else{
                n1 = parseInt(screen.lastChild.textContent); 
            }
        })
    if(button.classList[1] === "AC"){
        button.addEventListener("click", ()=>{
            screen.lastChild.textContent = ""; 
            //reset
            n1 = null;
            n2 = null;
            operator = null; 
        })
    }
});