import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Page2.module.css';
import X from '../X/X';
import O from '../O/O';
import Button from '../Button/Button';
import CheckButton from '../CheckButton/CheckButton';

const Page2 = () => {
	return (
		<div className={classes.outlet}>
			<h3 style={{ marginTop: '50px' }}>Pick Your side</h3>
			<div className={classes.container}>
				<div className={classes.myX}>
					<X myheight='80px' mywidth='30px' />
					<CheckButton checked={true} />
				</div>
				<div className={classes.myO}>
					<O myheight='80px' mywidth='80px' />
					<CheckButton checked={false} />
				</div>
			</div>
			<Link to='/play' style={{ textDecoration: 'none' }}>
				<Button text='Continue' colorBack='white' colorText='#a4a4a4' />
			</Link>
		</div>
	);
};

export default Page2;
