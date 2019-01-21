import React, { Component } from 'react';
import Hero from './components/hero'
import Logowall from "./components/logowall/logowall";

import { getBrands as clientLogos } from "./services/clientList";
import { getBrands as partnerLogos } from "./services/partnerList";

class Splash extends Component {
	state = {  
		clientLogos: clientLogos(),
		partnerLogos: partnerLogos()
	}
	render() { 
		return (
			<React.Fragment>
				<Hero />
				<p>Some client references...</p>
				<Logowall src={this.state.clientLogos} />
				<p>and some of the agencies we work close with...</p>
				<Logowall src={this.state.partnerLogos} />

			</React.Fragment>
		);
	}
}
 
export default Splash;