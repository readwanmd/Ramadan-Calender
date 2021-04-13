import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicTable from './component/BasicTable';
import Home from './component/Home';
import schedule_rahmat from './component/schedule/schedule_rahmat.json';
import schedule_magfirat from './component/schedule/schedule_magfirat.json';
import schedule_nazat from './component/schedule/schedule_nazat.json';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/calender">
					<BasicTable schedule={schedule_rahmat} tableHeader="Rahamat" />
					<BasicTable schedule={schedule_magfirat} tableHeader="Magfirat" />
					<BasicTable schedule={schedule_nazat} tableHeader="Nazat" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
