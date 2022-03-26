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

//(2022-03-25) Adding random color drawing function
//There are two buttons, Black and Color.
//1. Default type is Black.
//2. When Color button is pressed, random color will be applied each time mouseenter different grid.
//3. Going to utilize Math.random() method. Since rgb color requires three integer values between 0~255. ex)rgb(0,0,0) is black.
const rgb = () => {
        let redValue = Math.floor(Math.random() * 256);
        let greenValue = Math.floor(Math.random() * 256);
        let blueValue = Math.floor(Math.random() * 256);
        let rgbValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        return rgbValue;
    }
    //Going to add two butons, one for random color and another for black grid.
const randomColor = () => {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = rgb();
        })
    })
}
const blackColor = () => {
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor = 'black';
        })
    })
}
const rgbButton = document.querySelector('#randomColor');
const blackButton = document.querySelector('#blackColor');
rgbButton.addEventListener('click', randomColor);
blackButton.addEventListener('click', blackColor);

const reset_btn = document.querySelector('#reset');
reset_btn.addEventListener('click', () => {
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    //Asking for a new grid size
    //Making sure user to choose from valid options. 
    //Validation logic is implemented with a recursive function.
    const validation = () => {
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
        } else {
            validation();
        }
    }
    validation();
});