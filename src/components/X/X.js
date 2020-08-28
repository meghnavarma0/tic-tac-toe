import React from 'react';
import classes from './X.module.css';

const X = ({ myheight, mywidth }) => {
	return (
		<div className={classes.myx} id={classes.mdiv}>
			<div
				className={classes.sdiv}
				style={{ height: myheight, width: mywidth }}
			>
				<div
					className={classes.md}
					style={{ height: myheight, width: mywidth }}
				></div>
			</div>
		</div>
	);
};

export default X;
