import Navbar from './Navbar';
import Tech from './Tech';

const About = () => {
	return (
		<section className="container">
			<div className="stack">
				<Tech name="html" />
				<Tech name="css" />
				<Tech name="javascript" />
				<Tech name="react" />
				<Tech name="node" />
				<Tech name="express" />
				<Tech name="mongo" />
				<Tech name="mysql" />
			</div>
			<Navbar />
		</section>
	);
};

export default About;
