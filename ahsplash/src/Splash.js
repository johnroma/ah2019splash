import React, { Component } from 'react';
import Hero from './components/hero'
import Logowall from "./components/logowall/logowall";
import ScrollMagic from 'scrollmagic';
import 'debug.addIndicators';
import { getBrands as clientLogos } from "./services/clientList";
import { getBrands as partnerLogos } from "./services/partnerList";

class Splash extends Component {
	constructor(props) {
        super(props);
		

        this.state = {
			controller: new ScrollMagic.Controller(),
			clientLogos: clientLogos(),
			partnerLogos: partnerLogos(),
			scrollTrigger: false,
			smSettings : { triggerElement: "#trigger", duration: 3000, triggerHook: 0.7 },
			partnerVisibility: false
		};
		
		this.handleUpdDuration = this.handleUpdDuration.bind(this);
    }

	componentDidMount() {
	const settings = this.state.smSettings;
	const controller = this.state.controller;

	this.scene = new ScrollMagic.Scene( settings )
					.addTo(controller)
					// .addIndicators()
					.on("update", (e)=>{
						// console.log(e.target.controller().info("scrollDirection"));
					})
					.on("start", (e)=> this.setState( { scrollTrigger:true }))
					.on("end", (e)=> !this.state.partnerVisibility? this.showPartners() : null);
	}
	
	showPartners() {
		this.setState( { partnerVisibility: true} );

		console.log('end', this.state.partnerVisibility)
	}

	handleUpdDuration (n){
		
		this.setState( { smSettings : { triggerElement: "#trigger", duration: n, triggerHook: 0.7 } })
		this.scene.duration(this.state.smSettings.duration);

	}



	render() { 

		const { clientLogos } = this.state;
		clientLogos.in = false;
		
		let showHide;

		if (!this.state.partnerVisibility) {
			showHide = 'hide';
		  } else {
			showHide = '';
		  }
		

		return (
			<React.Fragment>
				
				<a href="mailto:info@anthood.com" className="contact">info@anthood.com</a>
				<Hero />
				<h2 className="title-refs">Some client references...</h2>
				<div id="trigger" style={{ position: "absolute", top: "100vh"}}/>
				<div className="arrow_holder">
					<i className="fas fa-arrow-down see_more"></i>
				</div>
				<Logowall onUpDuration={ this.handleUpdDuration } id={"clients"} scrollTrigger={this.state.scrollTrigger} src={clientLogos} />
				<p className={ showHide } id="partners-title">and some of the agencies we work close with...</p>
				<Logowall hider={ this.state.partnerVisibility } id={"partners"} src={this.state.partnerLogos} />

			</React.Fragment>
		);
	}
}
 
export default Splash;