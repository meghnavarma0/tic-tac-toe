import React, { useState } from 'react';
import classes from './Board.module.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Square from '../Square/Square';
import X from '../X/X';
import O from '../O/O';

const Board = () => {
	const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));

	const [xIsNext, setXIsNext] = useState(true);

	const handleClick = index => {
		const squares = [...boardSquares];

		if (squares[index]) return;

		squares[index] = xIsNext ? <X /> : <O />;

		setBoardSquares(squares);

		setXIsNext(!xIsNext);
	};

	const renderSquare = index => {
		return (
			<Square
				value={boardSquares[index]}
				onClick={() => handleClick(index)}
			/>
		);
	};

	return (
		<>
			<ScoreBoard />
			<div className={classes.grid}>
				<div className={classes.boardRow}>
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className={classes.boardRow}>
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className={classes.boardRow}>
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
			</div>
		</>
	);
};

export default Board;
