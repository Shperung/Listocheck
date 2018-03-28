// Class
import React, {Component} from 'react';

export default class ArticleClass extends Component {
  render() {
    const {
      id,
      title,
      text
    } = this.props;
    return (
      <article key={id}>
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    )
  }
}/*class*/