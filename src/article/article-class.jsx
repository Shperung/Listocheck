// Class
import React, {Component} from 'react';
import Commemt from "./comment.jsx";
import CommemtList from "./comment-list.jsx";


import toggleOpen from "../decorators/toddle-open.jsx";

class ArticleClass extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReciveProps (isOpen) - ', this.props.title, this.props.isOpen, nextProps.isOpen);
  }

  setContainerRef = ref => {
    this.container = ref;
    console.log('ref ', ref);
  }

  render() {
    //console.log(this.state); // стейт всегда логировать в render (в других методах неправильно)
    const {
      id,
      title,
      text,
      comments,
      isOpen,
      toggleOpen
    } = this.props;   

    const body = isOpen ? 
      <React.Fragment>
        <p>Текст - {text}</p> 
        <CommemtList comments={comments} />
      </React.Fragment>
    : null;

    return (
      <article
        key={id}
        ref={this.setContainerRef}
      >
        <h3>{title}</h3>
        <button onClick= {toggleOpen} type="button">
          {isOpen ? 'close' : 'open'}
        </button>
        {body}
      </article>
    )
  }


}/*class*/

export default ArticleClass;