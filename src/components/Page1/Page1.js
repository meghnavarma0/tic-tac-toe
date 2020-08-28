import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Page1.module.css';
import X from '../X/X';
import O from '../O/O';
import Button from '../Button/Button';

const Page1 = () => {
	return (
		<div className={classes.cover}>
			<div className={classes.container}>
				<X myheight='80px' mywidth='30px' />
				<O myheight='80px' mywidth='80px' />
			</div>
			<p style={{ fontFamily: 'Lexend Peta, sans-serif' }}>
				Choose your play mode
			</p>
			<Link to='/select' style={{ textDecoration: 'none' }}>
				<Button
					text='Play with AI'
					colorBack='rgb(51, 158, 247)'
					colorText='white'
				/>
			</Link>
			<Link to='/select' style={{ textDecoration: 'none' }}>
				<Button
					text='with a friend'
					colorBack='white'
					colorText='#a3a3a3'
				/>
			</Link>
		</div>
	);
};

export default Page1;
