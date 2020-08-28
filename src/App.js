import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TicTacToe from './components/TicTacToe';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/' exact>
						<Page1 />
					</Route>
					<Route path='/select'>
						<Page2 />
					</Route>
					<Route path='/play'>
						<TicTacToe />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
