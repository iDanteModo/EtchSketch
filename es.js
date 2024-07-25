const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const resetButton = document.querySelector("#btn2");
const buttons = document.querySelectorAll("button");
let trigger = false;
let toggle = false;
let size = 16;


buttons.forEach(button => {
     button.addEventListener('mouseenter', () =>{
        button.style.backgroundColor = "#007bff";
        button.style.color = "white";
     })
     button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "";
        button.style.color = "";
     })
})


container.addEventListener('mousedown', () => {
    trigger= true;
});

container.addEventListener('mouseup',  () => {
    trigger= false;
})

const toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener('click', () => {
    if( toggle == false){
        toggleButton.classList.add('active'); 
        toggle = true;
    } else if ( toggle == true) {
        toggleButton.classList.remove('active');
        toggle = false;
    }
    console.log(toggle);
    return toggle;
});


function createBoard(value = 16) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear any existing grid

    // Calculate the total number of squares
    const total = value * value;  

    for (let i = 0; i < total; i++) {
        const square = document.createElement('div');
        
        // Calculate the percentage width for each square based on the grid size
        const percentageWidth = 100 / value;

        // Add styling to each square, setting the flex basis dynamically
        square.style.cssText = `
            border: 0.1px solid white; 
            height: 20px; 
            width: ${percentageWidth}%; 
            box-sizing: border-box;
            flex: 1 0 ${percentageWidth}%;
            opacity: 0.1;
        `;
        
        square.classList.add("square");
        
        // Add a line break every `value` squares to create a new row
        if (i % value === 0 && i !== 0) {
            const lineBreak = document.createElement('div');
            lineBreak.style.cssText = "width: 100%; height: 0;";
            container.appendChild(lineBreak);
        }
        square.style.backgroundColor = "white";
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                if(trigger == true && square.style.backgroundColor == "white" && toggle == true) {
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    square.style.backgroundColor = `rgb(${r},${g}, ${b})`; 
                    square.style.borderColor = `rgb(${r},${g}, ${b})`; 
                } else if ( trigger == true && toggle == true && square.style.backgroundColor != "black") {
                    let currentOpacity = parseFloat(square.style.opacity)
                    let newOpacity = currentOpacity + 0.10;
                    console.log(newOpacity);
                    square.style.opacity = newOpacity;
                } else if ( trigger == true  && toggle == false){
                    square.style.backgroundColor = 'black';
                    let currentOpacity = parseFloat(square.style.opacity)
                    let newOpacity = currentOpacity + 0.10;
                    console.log(newOpacity);
                    square.style.opacity = newOpacity
                    square.style.borderColor = "black";
                    console.log("black");
                } else if ( trigger == true && square.style.backgroundColor == "black" && toggle == true){
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    square.style.backgroundColor = `rgb(${r},${g}, ${b})`; 
                    square.style.borderColor = `rgb(${r},${g}, ${b})`; 
                }
        })
    }
}


function removeBoard () {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square  => {
        square.remove();
    });
}


button.addEventListener("click", () => {
    let value = prompt("Please enter the number of squares per side for the new grid", "Maximum 50");
    if ( value <= 50) {
        removeBoard();
        createBoard(value);
    } else { 
        alert("Maximum 50 please")
    }
    return size = value;
});



resetButton.addEventListener("click", () => {
    removeBoard();
    createBoard(size);
})



createBoard(16);



/*function createBoard (value = 16 * 16) {
    for (i = 0; i < value; i++){
        const square = document.createElement('div');
        square.textContent =  "___";
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.setAttribute('style', 'background-color: purple; color: purple;');
        })
    }  
}
    */