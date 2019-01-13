import React, { Component } from 'react';
import Hero from './hero'

class Splash extends Component {
	state = {  }
	render() { 
		return (
			<React.Fragment>
				<Hero />
				<h1>Hello world</h1>
			</React.Fragment>
		);
	}
}
 
export default Splash;