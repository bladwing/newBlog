import React from 'react';
import '../static/css/404.css';
import Img from '../static/images/404.png';

function NotFound() {
	return(
		<div>
		<img className="error" src={Img} alt="error404"/>
		<a href="/"><h1 className="errorText">Please go to Home Page</h1></a>
		</div>
		)
}
export default NotFound;