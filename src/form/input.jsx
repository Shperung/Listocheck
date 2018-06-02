// Class
import React, {Component} from 'react';

class Input extends Component {

	state={
		username: '',
	};

	handleUserChange = (ev) => {

		console.log('ev.target', ev.target);
		{/* Меняю цвет */}
		if (ev.target.value.length < 5 || ev.target.value.length > 15 ) {
			ev.target.style = 'outline-color: red'
		} else {
			ev.target.style = 'outline-color: transparents'
		}
		this.setState({
				username: ev.target.value,
		});

	};

	render() {
		const {
			label = "Enter => "
		} = this.props;
		return (
			<label htmlFor="username">
			{label} &nbsp;
				<input
					id="username"
					required
					type="text"
					value={this.state.username}
					onChange={this.handleUserChange}
				/>
			</label>
		)
	}

}


export default Input;