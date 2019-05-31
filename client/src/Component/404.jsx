import React from 'react';
import '../static/css/404.css';
import Img from '../static/images/404.png';



function NotFound() {
	return(
		<div>
		<img class="error" src={Img}/>
		<a href="/"><h1 class="errorText">Please go to Home Page</h1></a>
		</div>
		)
}
export default NotFound;