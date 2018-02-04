import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Form from '../Form';
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<Header />
					<Menu />
					<Form />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
