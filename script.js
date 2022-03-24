const body = document.querySelector('body')
const container = document.createElement('div');
container.classList.add('grid-container');
body.appendChild(container);

let canvasSize = 16;
const gridFunction = (size) => {
    for (let i = 0; i < canvasSize ** 2; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
    let grids = document.querySelectorAll('.grid');
    //adding event listener to all of grids with forEach() method.
    grids.forEach(grid => {
        grid.classList.add(size)
        grid.addEventListener('mouseenter', () => {
            grid.classList.add('color-me');
        });
    });
}
gridFunction(`size${canvasSize}`);

const reset_btn = document.querySelector('#reset');
reset_btn.addEventListener('click', () => {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    //Asking for a new grid size
    //Making sure user to choose from valid options. 
    canvasSize = parseInt(prompt('Please choose your grid. 64, 32, 16, 8, 4, 2, 1'));

    if (canvasSize === 64) {
        gridFunction(`size${64}`);
    } else if (canvasSize === 32) {
        gridFunction(`size${32}`);
    } else if (canvasSize === 16) {
        gridFunction(`size${16}`);
    } else if (canvasSize === 8) {
        gridFunction(`size${8}`);
    } else if (canvasSize === 4) {
        gridFunction(`size${4}`);
    } else if (canvasSize === 2) {
        gridFunction(`size${2}`);
    } else if (canvasSize === 1) {
        gridFunction(`size${1}`);
    }
});



//Making a reset button to do two things:
//1. reset the grid, make them go back to grey color background. (DONE)
//2. a prompt should pop up asking size of the grid to project on web. ex)64 would be 64x64 grid, which is huge.(Partialy DONE)
//In order for this to work, 1)need a maximum width or size of canvas, 2)make each grid to change size accordingly in order to fit. (DONE)

//reset function first