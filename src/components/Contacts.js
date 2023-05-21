import Navbar from './Navbar';

const Contacts = () => {
	return (
		<section className="container">
			<div className="contacts">
				<a
					href="http://www.github.com/andrwgarciaa"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="img/github.png" alt="github logo" />
				</a>

				<a href="mailto:andrwgarciaa@gmail.com">
					<img src="img/email.png" alt="email" />
				</a>
				<a
					href="https://www.linkedin.com/in/andrwgarciaa"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="img/linkedin.png" alt="linkedin logo" />
				</a>
			</div>
			<Navbar />
		</section>
	);
};

export default Contacts;
