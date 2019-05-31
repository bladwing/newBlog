import React from 'react';
import logo from '../static/images/logo-1.png'
import { Link } from 'react-router-dom'



	function Header() {
		return(
			
			<div className="head">
				<div className="header-top">
				<div className="head-main" >
					<Link to="/"><img src={logo} alt=""/></Link>
				</div>
				</div>
				
			</div>
			
			)
	}

export default Header;