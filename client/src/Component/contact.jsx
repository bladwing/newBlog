import React from 'react'


function Contact() {
	return (
	<div className="contact">
		<div className="container">
			<div className="contact-bottom">
				<iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6632.248000703498!2d151.265683!3d-33.7832959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12abc7edcbeb07%3A0x5017d681632bfc0!2sManly+Vale+NSW+2093%2C+Australia!5e0!3m2!1sen!2sin!4v1433329298259" frameBorder="0" ></iframe>
				<div className="contact-text">
					<div className="col-md-4 contact-left">
						<h4>Sed dapibus nunc eu metus commodo, et dictum justo fermentum.</h4>
						<p>Aliquam quis lacus at sapien tempor semper. Sed ultrices et metus et elementum. Nunc sed justo at erat consequat mollis et eu lectus.</p>
						<div className="address">
							<h4>Address</h4>
							<p>Coffee Blog, 
							<span>Lorem ipsum dolor,</span>
							Glasglow Dr 40 Fe 72.</p>
						</div>
					</div>	
					<div className="col-md-8 contact-right">
						<input placeholder="Name" type="text" required />
						<input placeholder="Email" type="text" required />
						<textarea placeholder="Message" required></textarea>
							<div className="submit-btn">
								<form>
									<input type="submit" value="SUBMIT" />
								</form>
							</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	</div>

		)
}

export default Contact