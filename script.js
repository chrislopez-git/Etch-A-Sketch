const gridHolder = document.querySelector('#main-container');
// gridHolder.style.backgroundColor = "green";

window.addEventListener("load", setGrid(4));


function setGrid(size){
    gridHolder.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    // use back ticks and ${} to use variable in string
    fillGrid(size);
}

function fillGrid(size) {
    for(let i = 0; i < size * size; i++){
        console.log("filling grid!");
        const gridChild = document.createElement("div");
        gridChild.classList = "grid-element";
        gridChild.addEventListener("mouseover", changeColor);
        gridHolder.appendChild(gridChild);

    }
}

function changeColor(e) {
    const ranR = Math.floor(Math.random() * 256);
    const ranG = Math.floor(Math.random() * 256);
    const ranB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${ranR}, ${ranG}, ${ranB})`;

}

/* grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    column-gap: 5px;;
    row-gap: 10px; */
