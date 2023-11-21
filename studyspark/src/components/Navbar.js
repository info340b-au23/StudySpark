import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<img
						src="/img/studyicon.png"
						alt="The logo of StudySpark"
						class="nav-icon pe-2"
					/>
					StudySpark
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navtoggle"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navtoggle">
					<ul className="navbar-nav ms-auto align-items-center">
						<li className="nav-item mx-2">
							<NavLink className="nav-link" to="/decks">
								Decks
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink className="nav-link" to="/login">
								Log In
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink className="nav-link" to="/signup">
								Sign Up
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}