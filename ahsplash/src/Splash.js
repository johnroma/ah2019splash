import React, { Component } from 'react';
import Hero from './components/hero'
import Logowall from "./components/logowall";

class Splash extends Component {
	state = {  }
	render() { 
		return (
			<React.Fragment>
				<Hero />
				<Logowall />
			</React.Fragment>
		);
	}
}
 
export default Splash;