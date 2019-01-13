import React, { Component } from 'react'
import logo from '../logo.svg';


class Hero extends Component {
	state = {  }
	render() { 
		return ( 
			<React.Fragment>
				<a href="mailto:info@anthood.com">
					<img src={logo} alt="Anthood logo" />
				</a>
			</React.Fragment>
		);
	}
}
 
export default Hero;