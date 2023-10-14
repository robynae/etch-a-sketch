const container = document.querySelector('.container');
let currentGridSize = 16;
let currentColor = '#2a2a3c';

function createGrid(num) {
    num = currentGridSize;
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < num; j++) {
            const cells = document.createElement('div');
            cells.classList.add('cells');
            row.appendChild(cells);
        }
    }
}

function changeColor(cell, color) {
    color = currentColor;
    cell.style.backgroundColor = currentColor;
}

createGrid();

function pleaseWork() {
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cells')) {
            changeColor(event.target);
        }
    });
}

pleaseWork();

function newGrid() {
    container.innerHTML = '';
}

const thirtyTwo = document.querySelector('.thirty-two');
const sixteen = document.querySelector('.sixteen');
const sixtyFour = document.querySelector('.sixty-four');
const buttons = document.querySelectorAll('.button')

function newSize(event) {
  if(event.target.classList.contains('sixteen')) {
    currentGridSize = 16;
    newGrid();
    createGrid(currentGridSize); 
    pleaseWork();
  } else if(event.target.classList.contains('thirty-two')) {
    currentGridSize = 32;
    newGrid();
    createGrid(currentGridSize);
    pleaseWork();
  } else if(event.target.classList.contains('sixty-four')) {
    currentGridSize = 64;
    newGrid();
    createGrid(currentGridSize);
    pleaseWork();
  }

}

buttons.forEach(function(button) {
    button.addEventListener('click', newSize);
});

const reset = document.querySelector('.reset');

function resetGrid() {
  newGrid();
  createGrid(currentGridSize);
  pleaseWork();
};

reset.addEventListener('click', resetGrid);

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const orange = document.querySelector('.orange');
const colors =document.querySelectorAll('.color')

function colorMode(event) {
  switch(event.target.classList[0]) {
    case 'red':
        currentColor = '#ca3c4a';
        break;
    case 'orange':
        currentColor = '#ef7546';
        break;
    case 'blue':
        currentColor = '#99beb7';
        break;
    case 'yellow':
      currentColor = '#f2c665';
      break;
    case 'black':
      currentColor = '#2a2a3c'
      break;
    case 'eraser':
      currentColor = 'white';
      break;
  }
}

colors.forEach(function(color) {
    color.addEventListener('click', colorMode);
});