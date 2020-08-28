import React from 'react';
import classes from './Square.module.css';

const Square = ({ onClick, value }) => {
	return (
		<div className={classes.square} onClick={onClick}>
			{value}
		</div>
	);
};

export default Square;
