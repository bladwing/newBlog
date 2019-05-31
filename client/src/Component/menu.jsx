import React from 'react';
import { NavLink } from 'react-router-dom';
import Share from './share/share';

function Menu() {
	return (
		<div className="header">
			<div className="container">
				<div className="head">
					<div className="navigation">
						 <span className="menu"></span> 
							<ul className="navig">
								<li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="/Gallery">Gallery</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
					</div>	
				<div className="header-right">
				<div className="search-bar">
					<input type="text" placeholder="Search"/>
					<input type="submit" value="" />
				</div>
				<Share />
			</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	
)};
export default Menu;