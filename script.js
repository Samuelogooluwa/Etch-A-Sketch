function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", changeColor);
            container.appendChild(square);
        }
    }
}

function changeColor(event) {
    const randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    event.target.style.backgroundColor = randomColor;
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per side (1-100):");
    gridSize = parseInt(gridSize, 10);

    if (gridSize >= 1 && gridSize <= 1000) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(20);
