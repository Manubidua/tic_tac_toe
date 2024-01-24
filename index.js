document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }

    function handleCellClick(event) {
        const index = event.target.dataset.index;

        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            event.target.textContent = currentPlayer;

            if (checkWin()) {
                alert(`Player ${currentPlayer} wins! and  other one is looser`);
                gameActive = false;
            } else if (gameBoard.every(cell => cell !== '')) {
                alert('It\'s a draw!');
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWin() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombinations.some(combination =>
            combination.every(index => gameBoard[index] === currentPlayer)
        );
    }
});
