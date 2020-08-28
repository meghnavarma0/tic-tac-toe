import React from 'react';
import classes from './CheckButton.module.css';

const CheckButton = ({ checked }) => {
	return (
		<div className={classes.myOuter} id={classes.outer}>
			<div className={classes.outerCheck}>
				<div className={classes.midCheck}>
					{checked && <div className={classes.innerCheck}></div>}
				</div>
			</div>
		</div>
	);
};

export default CheckButton;
