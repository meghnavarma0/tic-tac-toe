import React from 'react';
import Button from '../Button/Button';
import classes from './ScoreBoard.module.css';

const ScoreBoard = () => {
	return (
		<div className={classes.container}>
			<span>Alex</span>
			<Button
				text='0-0'
				colorBack='white'
				colorText='#000'
				mywidth='100px'
			/>
			<span>AI</span>
		</div>
	);
};
export default ScoreBoard;
