import React from 'react';
// import logo from './logo.svg'
import './App.css';
// 首先我们需要导入一些组件...
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import { Button, Switch } from 'element-react';

// function App() {
//   return (
//     <div className="App">
// 		<ul>
// 			test
// 		</ul>
//     </div>
//   );
// }


class Root extends React.Component{
	render() {
		return (
			<div>
				<h1>Root</h1>
				<Button type="primary">Hello</Button>
				<Switch
					value={true}
					onText=""
					offText="">
				</Switch>
				<Switch
					value={true}
					onColor="#13ce66"
					offColor="#ff4949">
				</Switch>				
			</div>
		)
	}
}

class App extends React.Component{
	render() {
		return (
			<Router>
				<ul>
					<li><Link to="/">root</Link></li>
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

export default App;
