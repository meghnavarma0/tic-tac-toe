import React from 'react';
import classes from './O.module.css';

const O = ({ myheight, mywidth }) => {
	return (
		<div
			className={classes.myO}
			id={classes.outer}
			style={{ height: myheight, width: mywidth }}
		>
			<div
				className={classes.bigger}
				style={{ height: myheight, width: mywidth }}
			>
				<div className={classes.smaller}></div>
			</div>
		</div>
	);
};

export default O;
