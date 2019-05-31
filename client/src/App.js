import React from 'react';
import { BrowserRouter as Router, Route, Switch	 } from "react-router-dom";

import './static/css/style.css';
import './static/css/bootstrap.css';
import './static/css/blog_post.css';

import Menu from './Component/menu';
import NotFound from './Component/404'
import Blog from './Component/Post/blog';
import Header from './Component/header';
import Footer from './Component/footer';
import Aboutus from './Component/about';
import Detail from './Component/Post/detail';
import GalleryCom from './Component/gallery';
import FormContact from './Component/contact';

 function App() {
  return (
  	<Router>
    	<Header />
    	<Menu />
    		<Switch>
    			<Route path="/" component={Home} exact />
    			<Route path="/About" component={About} />
    			<Route path="/Gallery" component={Gallery} />
    			<Route path="/Contact" component={Contact} />
				<Route path="/blogposts/:id" component={Detail}/>
				<Route path="*" component={NotFound} status={404} />
			</Switch>	
    	<Footer />
	</Router>

    )
};

	function Home() {
	return (
		<div>
			<div className="contact-top heading"><h3>Welcome</h3></div>
			<Blog />
		</div>
		);
}

	function About() {
	return (
		<div>
			<div className="contact-top heading"><h3>About Blog</h3></div>
			<Aboutus />

		</div>
		);
}

	function Gallery() {
	return (
		<div>
				<div className="contact-top heading"><h3>Gallery</h3></div>
				<GalleryCom />
				
		</div>
		);
}
	function Contact() {
		return (
			<div>
					<div className="contact-top heading"><h3>Contact</h3></div>
				
				<FormContact />
			</div>

		);
}
export default App;
