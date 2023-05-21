const Tech = ({ name }) => {
	return (
		<div className="tech">
			<img src={`img/${name}-light.png`} alt={`${name} icon`} />
		</div>
	);
};

export default Tech;
