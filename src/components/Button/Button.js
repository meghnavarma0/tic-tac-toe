import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, colorBack, colorText, mywidth }) => {
	return (
		<div
			className={classes.btn}
			style={{ color: colorText, background: colorBack, width: mywidth }}
		>
			{text}
		</div>
	);
};

export default Button;
