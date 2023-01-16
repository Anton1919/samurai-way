import React from 'react';
import preloader from "../../../assets/loadingSpinner/loading.svg";

const Preloader = () => {
	return (
		<div>
			<img src={preloader} alt="svg"/>
		</div>
	);
};

export default Preloader;