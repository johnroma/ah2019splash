import React, { Component, Fragment } from 'react';
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
			smSettings : { triggerElement: "#trigger", triggerHook: 0.85 },
			partnerVisibility: false
		};
		
		this.handleUpdDuration = this.handleUpdDuration.bind(this);
    }

	componentDidMount() {
	const {smSettings:settings, controller, partnerVisibility} = this.state;

	this.scene = new ScrollMagic.Scene( settings )
					.addTo(controller)
					// .addIndicators()
					.on("update", (e)=>{
						// console.log(e.target.controller().info("scrollDirection"));
					})
					.on("start", (e)=> this.setState( { scrollTrigger:true }))
					.on("end", (e)=> !partnerVisibility? this.showPartners() : null);
	}
	
	showPartners() {
		this.setState( { partnerVisibility: true} );

		// console.log('end', this.state.partnerVisibility)
	}

	handleUpdDuration (n){
		
		this.setState( { smSettings : { ...this.state.smSettings, duration: n} })
		this.scene.duration(this.state.smSettings.duration);
	}


	render() { 

		const { clientLogos, partnerLogos, scrollTrigger, partnerVisibility } = this.state;
		let showHide = !partnerVisibility? 'hide':'';

		return (
			<Fragment>
				
				<a href="mailto:info@anthood.com" className="contact">info@anthood.com</a>
				<Hero />
				<h2 className="title-refs">Some client references...</h2>
				<div id="trigger" style={{ position: "absolute", top: "100vh"}}/>
				<div className="arrow_holder">
					<i className="fas fa-arrow-down see_more"></i>
				</div>
				<Logowall onUpDuration={ this.handleUpdDuration } id={"clients"} animItems={scrollTrigger} src={clientLogos} />
				<p className={ showHide } id="partners-title">and some of the agencies we work close with...</p>
				<Logowall visibility={ partnerVisibility } id={"partners"} src={partnerLogos} />

			</Fragment>
		);
	}
}
 
export default Splash;