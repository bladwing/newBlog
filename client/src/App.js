import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './static/css/style.css';
import './static/css/bootstrap.css';
import './static/css/blog_post.css';
import Menu from 'menu';
import Header from 'header';
import Blog from 'blog';
import Footer from 'footer';
import Detail from 'detail';
import Aboutus from 'about'
// import Basic from 'feedback';
import FormContact from 'contact'
import GalleryCom from 'gallery'




 function App() {
  return (
  	<Router>
    	<Header />
    	<Menu />
    	
    		<Route path="/" component={Home} exact />
    		<Route path="/About" component={About} />
    		<Route path="/Gallery" component={Gallery} />
    		<Route path="/Contact" component={Contact} />
			<Route path="/blogposts/:id" component={Detail}/>		

    	<Footer />
	</Router>

    )
}

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
