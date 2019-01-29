import React, { Component } from 'react';
import Hero from './components/hero'
import Logowall from "./components/logowall/logowall";
import ScrollMagic from 'scrollmagic';
// import 'debug.addIndicators';
import { getBrands as clientLogos } from "./services/clientList";
import { getBrands as partnerLogos } from "./services/partnerList";

class Splash extends Component {
	constructor(props) {
        super(props);
		this.controller = new ScrollMagic.Controller();
        this.state = {
			clientLogos: clientLogos(),
			partnerLogos: partnerLogos(),
			scrollTrigger: false
        };
    }

	componentDidMount() {
	const settings = {triggerElement: "#trigger", triggerHook: 0.9,};

	this.scene = new ScrollMagic.Scene( settings )
					.addTo(this.controller)
					// .addIndicators()
					.on("update", (e)=>{
						// console.log(e.target.controller().info("scrollDirection"));
					})
					.on("start", (e)=> this.setState( { scrollTrigger:true }))
	}
	
	render() { 
		return (
			<React.Fragment>
				
				<a href="mailto:info@anthood.com" className="contact">info@anthood.com</a>
				<Hero />
				<h2 className="title-refs">Some client references...</h2>
				<div id="trigger" style={{ position: "absolute", top: "100vh"}}/>
				<div className="arrow_holder">
					<i className="fas fa-arrow-down see_more"></i>
				</div>
				<Logowall scrollTrigger={this.state.scrollTrigger} src={this.state.clientLogos} />
				<p>and some of the agencies we work close with...</p>
				<Logowall src={this.state.partnerLogos} />

			</React.Fragment>
		);
	}
}
 
export default Splash;