const gridHolder = document.querySelector('#main-container');


window.addEventListener("load", setGrid(16));


function setGrid(size){
     clearGrid();
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

function clearGrid(){
    // create array from childnodes (grid elements)
    const gridArray = Array.from(gridHolder.childNodes);
    gridArray.forEach((element) => {
        gridHolder.removeChild(element);
    });

}


const buttons =document.querySelectorAll('button');
console.log(buttons); //check nodelist

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        // console.log(playRound(button.id, computerPlay()));
        setGrid(button.id);
    });
});



/* grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    column-gap: 5px;;
    row-gap: 10px; */
