const body = document.querySelector('body')
const container = document.createElement('div');
container.classList.add('grid-container');
body.appendChild(container);

//making total 256 grids insdie of container div
for (let i = 0; i < 255; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);
}

//asccessing all of grids
const grids = document.querySelectorAll('.grid');
//adding event listener to all of grids
grids.forEach(grid => {
    grid.addEventListener('mouseenter', () => {
        grid.classList.add('color-me');
    });
});