const container = document.querySelector('.container');
const redimensionBtn = document.getElementById('redimension');
const clearBtn = document.getElementById('clear')

const MAX_SIDE_SIZE = 100

createDivs(16 ** 2);

container.addEventListener('mouseover', paintSquare);
redimensionBtn.addEventListener('click', askForNewDimensions)
clearBtn.addEventListener('click', clear)


function createDivs(quantity) {
    container.innerHTML = ''

    for (let i = 0; i < quantity; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
    }

}

function paintSquare(event) {
    // Assure its a square, and not the container itself.
    if (event.target === event.currentTarget) return;

    const square = event.target;
    square.classList.add('painted');
}

function askForNewDimensions() {
    const input = window.prompt('Enter the number of squares per side for the new grid: ', '')

    if(!input) return

    const numSides = +input

    if(isNaN(numSides) || numSides < 1 || numSides > MAX_SIDE_SIZE) {
        alert(`Invalid input. The number of sides must be between 1 and ${MAX_SIDE_SIZE}!`)
        return
    }

    resizeGrid(numSides)
}

function resizeGrid(numSides) {
    const gridStyle = `repeat(${numSides}, 1fr) / repeat(${numSides}, 1fr)`;
    container.style.grid = gridStyle

    createDivs(numSides ** 2)
}

function clear() {
    for(const square of container.children)
        square.classList.remove('painted')
}