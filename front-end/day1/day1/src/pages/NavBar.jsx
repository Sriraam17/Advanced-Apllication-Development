import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../assets/css/nav.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="topic">JOB TRACKER</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/listjobs">Available JOB</a>
				<a href="/aboutus">About us</a>
				<a href="/#">Reviews</a>
				<a href="/login">Login</a>
				<div className="nav-profile">
					<a href="/profile"><CgProfile/></a>
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;