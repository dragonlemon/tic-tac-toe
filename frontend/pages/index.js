import { useEffect, useState } from 'react';
import Board from '../components/Board';

export default function Home() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/reset', { method: 'POST' })
            .then(res => res.json())
            .then(data => setBoard(data.board));
    }, []);

    const handleClick = (index) => {
        if (winner || board[index]) return;

        fetch('http://localhost:5000/move', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index })
        })
            .then(res => res.json())
            .then(data => {
                setBoard(data.board);
                setWinner(data.winner);
            });
    };

    const resetGame = () => {
        fetch('http://localhost:5000/reset', { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                setBoard(data.board);
                setWinner(null);
            });
    };

    return (
        <div>
            <h1>井字遊戲 Tic-Tac-Toe</h1>
            <Board board={board} onClick={handleClick} />
            {winner && <h2>勝利者: {winner}</h2>}
            <br></br>
            <button onClick={resetGame}><h3>&nbsp;再玩一次&nbsp;</h3></button>
        </div>
    );
}
