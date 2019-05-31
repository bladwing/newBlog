import React from 'react';

import '../static/css/style.css';
import '../static/css/bootstrap.css';
import '../static/css/blog_post.css';

import Image from '../static/images/about.jpg';

function About() {
	return(
	<div className="welcome">
				<div className="welcome-bottom">
					<img src={Image} alt=""/>
					<p>Coffee is one hell of a drug. Every morning, you stumble down to the kitchen
					 a bleary-eyed, bed-headed grump, but as soon as you chug some java, you’re ready 
					 to walk out your door with a big bounce in your step.</p>
		</div>
	<div className="team">
		<div className="container">
		<div className="team-top heading">
			<h3>OUR TEAM</h3>
		</div>
			<div className="team-bottom">
				<div className="col-md-3 team-left">
					<img src='https://media.licdn.com/dms/image/C5603AQGp2JZ6R3ZkGA/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=mhoYbfUTsw9MrkuRe0ttbZ2anBqbuj8RoGwAF3808VQ' alt="" />
					<h4>Tima Ponarenko</h4>
					<p>Junior FrontEnd Developer.</p>
				</div>
				<div className="col-md-3 team-left">
					<img src="https://avatars3.githubusercontent.com/u/6803737?s=460&v=4" alt="" />
					<h4>Jano Bokuchava</h4>
					<p>Mentor.</p>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>
</div>	
		)
}
export default About;