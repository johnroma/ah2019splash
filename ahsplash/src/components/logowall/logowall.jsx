import React, { Component } from 'react';
import './logowall.css';
import { getBrands } from "../../services/brandListService";
import LogoWallItem from './logowallItem'

class Logowall extends Component {

	state = {
		logosrc : getBrands()
	  };

	render() { 
		return (
		<ul id="hexGrid">
		{
			this.state.logosrc.map( (pos, id) => <LogoWallItem src={pos.src} key={id} alt={pos.src} /> )
		}
		</ul>
		);
	}
}
 
export default Logowall;