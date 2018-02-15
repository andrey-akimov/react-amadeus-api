import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import Form from '../Form/Form';
import HotelsList from '../HotelsList/HotelsList';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<div className="main">
						<Header />
						<Form />
					</div>
					<HotelsList />
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
