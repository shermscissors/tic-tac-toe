/*----- constants -----*/

const players = {
    playerOne: 'X',
    playerTwo: 'O',
};

/*----- app's state (variables) -----*/

let currentPlayer;
let winState;
let moves; 

/*----- cached element references -----*/

let grid = document.querySelector('#grid');
let input = document.querySelector('.box')
let resetButton = document.querySelector('button');

/*----- event listeners -----*/

grid.addEventListener('click', handleClick);
resetButton.addEventListener('click', init)

/*----- functions -----*/

function init(event){
    // Reset grid
    moves = [];
    // Set players to player one
    currentPlayer = players.playerOne;
    // Set winners to none
    winState = false;
    console.log("hello from reset button")
}
// Start Game
init();

function handleClick(event) {
    console.log('Hello, from gameboard')
    updateGrid(event);
    switchPlayer(event);
}

function switchPlayer() {
    if (currentPlayer === players.playerOne) {
        currentPlayer = players.playerTwo;
    } else if (currentPlayer === players.playerTwo) {
        currentPlayer = players.playerOne;
    }
}

function updateGrid(event) {
    if (currentPlayer === players.playerOne) {
        event.target.innerText = currentPlayer;
        moves.pop()
    } if (currentPlayer === players.playerTwo) {
        event.target.innerText = currentPlayer;
        moves.pop();
    }
    grid.appendChild
}