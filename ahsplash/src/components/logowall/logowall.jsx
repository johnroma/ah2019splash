import React, { Component } from 'react';
import './logowall.css';
import LogoWallItem from './logowallItem'

class Logowall extends Component {

	state = {
		logosrc : [
			{ src:"https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg", alt:"heldli"},
			{ src:"https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg", alt:""},
			{ src:"https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg", alt:""},
			{ src:"https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg", alt:""},
			{ src:"https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg", alt:""},
			{ src:"https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg", alt:""},
			{ src:"https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6139/5986939269_10721b8017.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7163/6822904141_50277565c3.jpg", alt:""},
			{ src:"https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg", alt:""},
			{ src:"https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg", alt:""},
			{ src:"https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg", alt:""},
			{ src:"https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg", alt:""},
			{ src:"https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg", alt:""}

		]
	  }

	render() { 
		return (
		<ul id="hexGrid">
			{
				this.state.logosrc.map( (pos, id) => (
					 <LogoWallItem src={pos.src} key={id} alt={pos.src} />
				))
			}
			
		</ul>
		);
	}
}
 
export default Logowall;