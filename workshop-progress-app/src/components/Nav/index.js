import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<h1>Workshop Tracker</h1>
				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/all-workshops">All Workshops</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
