// Class
import React, {Component} from 'react';
import toggleOpen from "../decorators/toddle-open.jsx";
import {connect} from "react-redux";

 class Comment extends Component {
  render() {
    const {
      id,
      comment,
      isOpen,
      toggleOpen
    } = this.props;

    console.log('this.props', this.props);

    const body = isOpen ? <p><em>{comment.text}</em></p> : null;

    return (
      <blockquote>
        <h4>Комент от - <b>{comment.user}</b></h4>
        <button onClick= {toggleOpen} type="button">
          {isOpen ? 'Закрыть коммент' : 'Показать коммент'}
        </button>
        {body}
      </blockquote>
    )
  }


};/*class*/

export default connect((state, ownProps) => {
  return {comment: state.comments.find(comment => comment.id === ownProps.id)}
})(toggleOpen(Comment));