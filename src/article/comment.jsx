// Class
import React, {Component} from 'react';
import toggleOpen from "../decorators/toddle-open.jsx";

 class Comment extends Component {
  render() {
    const {
      id,
      user,
      text,
      isOpen,
      toggleOpen
    } = this.props;

    const body = isOpen ? <p><em>{text}</em></p> : null;

    return (
      <blockquote key={id}>
        <h4>Комент от - <b>{user}</b></h4>
        <button onClick= {toggleOpen} type="button">
          {isOpen ? 'Закрыть коммент' : 'Показать коммент'}
        </button>
        {body}
      </blockquote>
    )
  }



}/*class*/

export default toggleOpen(Comment);