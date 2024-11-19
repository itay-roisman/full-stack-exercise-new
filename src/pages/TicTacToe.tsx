import React, { useState } from 'react';

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: (string | null)[]) => {
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
      if (squares[a] && squares[a] === squares[b]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || board[i]) {
      return;
    }
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tic Tac Toe</h1>
        <div className="mb-4 text-lg font-medium text-gray-700">{status}</div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((square, i) => (
            <button
              key={i}
              className="w-20 h-20 bg-gray-100 hover:bg-gray-200 text-2xl font-bold flex items-center justify-center border border-gray-300 rounded"
              onClick={() => handleClick(i)}
            >
              {square}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}