import React from 'react';
import MyBtn from '../../component/my-btn/my-btn.js';
import { Link } from "react-router-dom";

class AboutApp extends React.Component {

	
	render() {
		return (
			<div>
				<h2>这是About 组件~</h2>
				<Link to="/">Root</Link>
			</div>
		)
	}
}

export default AboutApp;