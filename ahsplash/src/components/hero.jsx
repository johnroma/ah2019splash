import React, { Component } from 'react'
import logo from '../logo.svg';
import { Transition } from 'react-transition-group';

class Hero extends Component {
	
	render() { 
		return ( 
			<div className="hero">
				<a href="mailto:info@anthood.com">
					<img src={logo} id="logo" alt="Anthood logo" />
				</a>
			</div>
		);
	}
}
 
export default Hero;