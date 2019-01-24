import React, { Component } from 'react'
import logo from '../logo.svg';
import { Transition } from 'react-transition-group';


class Hero extends Component {
	constructor() {
        super();
        this.duration = 2000;
        this.state = {
            in: false
		};
		
        setTimeout(() => {
            this.setState({
                in: true
            });
		}, 2000);
		
        setTimeout(() => {
            this.setState({
                in: false
            });
        }, 6000);
	}
	
	render() { 
		return ( 
			<div className="hero">
				<a href="mailto:info@anthood.com">
					<img src={logo} id="logo" alt="Anthood logo" />
				</a>
				<Transition 
					in={ this.state.in } 
					timeout={ this.duration }
					mountOnEnter
					unmountOnExit
					>
                {
					 status  => {
						return <h1 
							className={ 'fade-transition fade-' + status }>
							{status}</h1>;
					}
				}
        		</Transition>
			</div>
		);
	}
}
 
export default Hero;