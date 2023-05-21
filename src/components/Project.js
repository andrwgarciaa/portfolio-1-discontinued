const Project = ({ name }) => {
	return (
		<div className="project">
			<img
				src={`img/capture-${name}-dark.png`}
				alt=""
				className="capture"
			/>
			<legend className="project-url text-detail">{name}</legend>
			<p className="project-description"></p>
		</div>
	);
};

export default Project;
