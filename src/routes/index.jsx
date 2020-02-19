import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/home'
import About from '../pages/about'
import Root from '../pages/root'

class routes extends React.Component{
	render() {
		return (
			<Router>
				<ul>
					<li><Link to="/">Root</Link></li>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
				<Route exact path="/" component={Root}></Route>
				<Route path="/home" component={Home}></Route>
				<Route path="/about" component={About}></Route>
			</Router>
		)
	}
}

export default routes;