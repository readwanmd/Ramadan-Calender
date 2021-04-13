import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';

const Home = () => {
	return (
		<section className="header">
			<div className="logo">
				<img src={logo} alt="" />
			</div>
			<div className="header-content">
				<h1>
					Ramadan <br /> <span>Kareem</span>
				</h1>
				<p>The holy month of fasting.</p>

				<Link to="/calender">
					<button>Calender</button>
				</Link>
			</div>
		</section>
	);
};

export default Home;
