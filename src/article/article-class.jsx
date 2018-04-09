// Class
import React, {Component} from 'react';
import Commemt from "./comment.jsx";

export default class ArticleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

 toggleOpen = (ev) => {
  // console.log('ev', ev);//Реактовський ивент
  // console.log('ev.nativeEvent', ev.nativeEvent);//Настоящий ивент
  this.setState({
      isOpen: !this.state.isOpen
    }
  )
 }

  render() {
    //console.log(this.state); // стейт всегда логировать в render (в других методах неправильно)
    const {
      id,
      title,
      text,
      comments
    } = this.props;

    const {
      isOpen
    } = this.state;

    const body = isOpen ? 
      <React.Fragment>
        <p>{text}</p> 
        {
          comments.length > 0 ? 
            comments.map((comment) => 
              <Commemt 
                key={comment.id}
                user={comment.user}
                text={comment.text}
              />
            )
          : null
        }

      </React.Fragment>
    : null;

    return (
      <article key={id}>
        <h3>{title}</h3>
        <button onClick= {this.toggleOpen} type="button">
          {isOpen ? 'close' : 'open'}
        </button>
        {body}
      </article>
    )
  }


}/*class*/