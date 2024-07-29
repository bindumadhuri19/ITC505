document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const board = document.getElementById('game-board');
    const refreshButton = document.getElementById('refresh-button');
    const hintButton = document.getElementById('hint-button');
    const moveCounter = document.getElementById('move-counter');
    
    let moves = 0; // Initialize moves counter

    // Initialize the game board
    const initBoard = () => {
        board.innerHTML = '';
        for (let i = 0; i < boardSize * boardSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('click', () => {
                toggleSquare(i);
                updateMoveCounter(); // Update move counter on each click
            });
            board.appendChild(square);
        }
        randomizeBoard();
        hintButton.disabled = false;
    };

    // Toggle a square and its neighbors
    const toggleSquare = (index) => {
        const squares = document.querySelectorAll('.square');
        const neighbors = [
            index - boardSize, // above
            index + boardSize, // below
            index - 1,         // left
            index + 1          // right
        ];
        const toggle = (i) => {
            if (i >= 0 && i < squares.length && !(i % boardSize === 0 && index % boardSize === boardSize - 1) && !(i % boardSize === boardSize - 1 && index % boardSize === 0)) {
                squares[i].classList.toggle('is-off');
            }
        };
        toggle(index);
        neighbors.forEach(toggle);
        checkWin();
    };

    // Randomly configure the board but keep it solvable
    const randomizeBoard = () => {
        const squares = document.querySelectorAll('.square');
        // Start with an all-white board
        squares.forEach(square => square.classList.remove('is-off'));
    };

    // Simulate a click on the square
    const simulateClick = (index) => {
        const squares = document.querySelectorAll('.square');
        squares[index].click(); // Simulate the click to toggle the square and its neighbors
    };

    // Check if the game is solved
    const checkWin = () => {
        const squares = document.querySelectorAll('.square');
        const allWhite = Array.from(squares).every(square => !square.classList.contains('is-off'));
        if (allWhite) {
            setTimeout(() => {
                alert('You win!');
            }, 300); // Delay the popup to ensure squares turn white first
        }
    };

    // Provide a hint by highlighting the best square to toggle
    const getHint = () => {
        const squares = Array.from(document.querySelectorAll('.square'));
        let bestSquare = -1;
        let minOnSquares = boardSize * boardSize;

        // Try toggling each square and see if it improves the board
        squares.forEach((square, index) => {
            toggleSquare(index);
            const onSquares = document.querySelectorAll('.square.is-off').length;
            if (onSquares < minOnSquares) {
                minOnSquares = onSquares;
                bestSquare = index;
            }
            toggleSquare(index); // Revert toggle
        });

        // Highlight the best square for hint
        if (bestSquare !== -1) {
            squares[bestSquare].classList.add('hint');
            setTimeout(() => squares[bestSquare].classList.remove('hint'), 3000);
        }
    };

    // Update move counter
    const updateMoveCounter = () => {
        moves += 1;
        moveCounter.textContent = moves;
    };

    hintButton.addEventListener('click', getHint);
    refreshButton.addEventListener('click', () => {
        initBoard();
        moves = 0; // Reset moves counter on refresh
        moveCounter.textContent = moves;
    });

    initBoard();
});
