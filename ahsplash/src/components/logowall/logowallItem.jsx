import React from 'react';


const LogoWallItem = (props) => {
	const { src, alt, transClass } = props;
	return (
		<li className={`hex ${transClass}`} >
			<img src={src} alt={alt} />
		</li>
	  );
}
 
export default LogoWallItem;
