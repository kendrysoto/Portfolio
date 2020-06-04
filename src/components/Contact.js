import React from 'react';
import '../style/Contact.css';
import Data from '../data/Data';

function Contact() {
	return (
		<div>
			{Data.map(data => (
				<div class="social" key={data.id}>
					<ul>
						<li>
							<a href={data.linkedink} target="_blank" className="icon-linkedin">
								<i className="fab fa-linkedin"></i>
							</a>
						</li>
						<li>
							<a href={data.github} target="_blank" className="icon-github">
								<i className="fab fa-github"></i>
							</a>
						</li>
						<li>
							<a href={data.Email} className="icon-email">
								<i className="fas fa-envelope-square"></i>
							</a>
						</li>
					</ul>
				</div>
			))}
		</div>
	)
}

export default Contact;