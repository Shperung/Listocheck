// Class
import React, {Component} from 'react';

class Textarea extends Component {

  state={
    username: null,
  };

  handleUserChange = (ev) => {
    {/* Меняю цвет */}
    if (ev.target.value.length < 20 || ev.target.value.length > 50 ) {
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
      label = "Enter text => "
    } = this.props;
    return (
      <label htmlFor="textarea">
      {label} &nbsp;
        <textarea
          id="textarea"
          type="text"
          onChange={this.handleUserChange}
        >
          {this.state.username}
        </textarea>
      </label>
    )
  }

}


export default Textarea;