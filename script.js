const container = document.querySelector('.container');
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let j = 0; j < num; j++) {
            const cells = document.createElement('div');
            cells.classList.add('cells');
            row.appendChild(cells);
        }
    }
};

createGrid(16);

