import React from 'react';

const LogoWallItem = (props) => {
	const { src, alt } = props;
	return (
		<li className="hex" >
			<img src={src} alt={alt} />
		</li>
	  );
}
 
export default LogoWallItem;
