const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let board = Array(9).fill(null);
let currentPlayer = 'X';

app.post('/move', (req, res) => {
    const { index } = req.body;

    board[index] = currentPlayer;
    const winner = calculateWinner(board);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    res.json({ board, winner });
});

app.post('/reset', (req, res) => {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    res.json({ board });
});

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.indexOf(null) === -1) {
        return '平手';
    }
    return null;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
