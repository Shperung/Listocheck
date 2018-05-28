// Class
import React, {Component} from 'react';

class Input extends Component {

	state={
		username: 'test',
	};

	handleUserChange = (ev) => {
		{/* Меняю цвет */}
		if (ev.target.value.length > 10 ) {
			ev.target.style = 'color: green'
		} else {
			ev.target.style = 'color: inherit'
		}
		this.setState({
				username: ev.target.value,
		});

	};

	render() {
		return (
			<label htmlFor="username">
			User: &nbsp;
				<input
					id="username"
					type="text"
					value={this.state.username}
					onChange={this.handleUserChange}
				/>
			</label>
		)
	}

}


export default Input; 