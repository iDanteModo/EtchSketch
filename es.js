const container = document.querySelector("#container");
const button = document.querySelector("#btn");


function createBoard (value = 16 * 16) {
    for (i = 0; i < value; i++){
        const square = document.createElement('div');
        square.textContent =  "___";
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: white; color: white;');
        })
    }  
}




createBoard();



button.addEventListener("click", () => {
    let size = prompt("Please enter the number of squares per side for the new grid", "Maximum 100");
});