import React from 'react';
import './my-btn.css';

const styleObj = {
	'backgroundColor': '#20a0ff'
};
class MyBtn extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			width : 80
		};
	}
	
	render() {
		return (
			<div className="btn" style={styleObj} onClick={ this.props.btnClick }>{ this.props.label }</div>
		);
	}
}

export default MyBtn;