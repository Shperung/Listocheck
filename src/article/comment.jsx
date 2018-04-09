// Class
import React, {Component} from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

 commentOpen = (ev) => {
  this.setState({
      isOpen: !this.state.isOpen
    }
  )
 }

  render() {
    const {
      id,
      user,
      text
    } = this.props;

    const {
      isOpen
    } = this.state;

    const body = isOpen ? <p><em>{text}</em></p> : null;

    return (
      <blockquote key={id}>
        <h4>Комент от - <b>{user}</b></h4>
        <button onClick= {this.commentOpen} type="button">
          {isOpen ? 'Закрыть коммент' : 'Показать коммент'}
        </button>
        {body}
      </blockquote>
    )
  }


}/*class*/