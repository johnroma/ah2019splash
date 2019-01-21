import React from 'react';
import './logowall.css';
import LogoWallItem from './logowallItem';


const Logowall = props => {

	const { src } = props;
	return (
		<ul className="hexGrid">
		{
			src.map( (pos, id) => <LogoWallItem src={"images/logowall/"+pos.src} key={id} alt={pos.src} /> )
		}
		</ul>
	);
};

 
export default Logowall;