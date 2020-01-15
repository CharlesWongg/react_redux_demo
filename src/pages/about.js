import React from 'react';
import MyBtn from '../component/my-btn/my-btn.js';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			btnLabel: 'About 的按钮~'
		};
		this.clk = this.clk.bind(this);
	}
	
	clk(e) {
		console.log(e);
		console.log(this.state.btnLabel + ' clicked!');
		this.setState({btnLabel: '按钮被点击'});
	}
	
	render() {
		return (
			<div>
				<h2>这是About 组件</h2>
				<MyBtn label={ this.state.btnLabel } btnClick={ this.clk }></MyBtn>
			</div>
		)
	}
}

export default Home;