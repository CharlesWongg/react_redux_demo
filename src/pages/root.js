import React from 'react';
import { Button, Switch } from 'element-react';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	render() {
		return (
			<div>
				<h1>Root</h1>
				<Button type="primary">Hello~</Button>
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

export default Root;