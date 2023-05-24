import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const locationPath = document.location.pathname;
	const routes = [
		{
			name: 'Home',
			path: '/',
			src: '/home',
			isActive: /^\/$/g.test(locationPath),
		},
		{
			name: 'Tech Stack',
			path: '/tech-stack',
			src: 'tech-stack',
			isActive: locationPath.match('/tech-stack'),
		},
		{
			name: 'Projects',
			path: '/projects',
			src: 'projects',
			isActive: locationPath.match('/projects'),
		},
		{
			name: 'Contacts',
			path: '/contacts',
			src: 'contacts',
			isActive: locationPath.match('/contacts'),
		},
	];

	const handleMouseOver = (e) => {
		const img = e.target;
		const span = img.previousSibling;
		const name = img.getAttribute('name');
		if (!img.parentNode.classList.contains('active')) {
			span.classList.remove('hidden');
			span.classList.add('show');
			img.src = `img/${name}-active.png`;
			img.addEventListener('mouseleave', () => {
				img.src = `img/${name}-inactive.png`;
				span.classList.add('hidden');
				span.classList.remove('show');
			});
		}
	};

	return (
		<nav className="nav">
			<ul>
				{routes.map((item) => {
					return (
						<li key={item.name} className="nav-link">
							<Link
								to={item.path}
								className={item.isActive ? 'active' : ''}
							>
								{item.isActive ? (
									<span className="nav-text show">
										{item.name}
									</span>
								) : (
									<span
										className="nav-text hidden"
										onClick={(e) => {
											if (window.screen.width >= 1060)
												e.preventDefault();
										}}
									>
										{item.name}
									</span>
								)}
								<img
									className={
										item.isActive
											? 'nav-icon active'
											: 'nav-icon'
									}
									src={`img/${item.src}-${
										item.isActive ? 'active' : 'inactive'
									}.png`}
									alt={`${item.name} Logo`}
									name={
										item.name === 'Tech Stack'
											? 'tech-stack'
											: item.name.charAt(0) +
											  item.name.substring(1)
									}
									onMouseOver={(e) => handleMouseOver(e)}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
