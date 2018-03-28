// Class
import React, {Component} from 'react';

export default class ArticleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

 toggleOpen = () => {
  this.setState({
      isOpen: !this.state.isOpen
    }
  )
 }

  render() {
    console.log(this.state);
    const {
      id,
      title,
      text
    } = this.props;

    const {
      isOpen
    } = this.state;

    const body = isOpen ? <p>{text}</p> : null;

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