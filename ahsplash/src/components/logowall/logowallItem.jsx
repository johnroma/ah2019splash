import React from 'react';


const LogoWallItem = (props) => {
	const { src, alt } = props;
	const transClass = props.transClass ? " "+props.transClass : "";

	return (
		<li className={`hex${transClass}`} >
			<img src={src} alt={alt} />
		</li>
	  );
}
 
export default LogoWallItem;
