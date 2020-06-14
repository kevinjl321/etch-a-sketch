const container = document.querySelector(".container");
const eraser = document.getElementById("erase");
const reset = document.getElementById("reset");
let squares;

function createGrid(num){
    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const square = document.createElement("div");
                square.classList.add("gridSquare");
                container.appendChild(square);
            square.onmouseover = () => square.style.backgroundColor = "black";
        }
    }
    squares = document.querySelectorAll(".gridSquare");
}
createGrid(16);

reset.addEventListener("click", () => {
    container.textContent = "";
    let num = prompt("Please enter a number between 1-100 \nto determine the squares per side for the grid.");
    
    while (num < 1 || num > 100 || isNaN(num)) {
        num = prompt("Number invalid. \nPlease enter a number between 1-100.");
    }
    
    createGrid(num);

});

eraser.addEventListener("click", () => {
    squares.forEach((square) =>{
        square.onmouseover = () => square.removeAttribute("style");
    });
    prompt("hello");
});


