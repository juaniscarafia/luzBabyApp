import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar: React.FC = () => {

	// const navigate = useNavigate();

	// const onLogout = () => {
	// 	navigate('/login', {
	// 			replace: true
	// 	})
	// }

	return (
		<nav className="navbar navbar-expand-lg navbar-custom">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><strong className="title-text"> 👶🏻 BabyApp 🍼 </strong></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink 
								className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }` }
								to="/measuremilks"
							>
								Measure Milks
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink 
									className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }` }
									to="/babyweight"
							>
								Baby Weight
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink 
									className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : '' }` }
									to="/babyheight"
							>
								Baby Height
							</NavLink>
						</li>
					</ul>
					<strong className="title-text">jiscarafía </strong>
					{/* <form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline btn-search" type="submit">Search</button>
					</form> */}
				</div>
			</div>
		</nav>
	)
}