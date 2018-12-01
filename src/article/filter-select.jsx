// Class
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

import {сhangeSelection} from "./article-action.js";

class SelectFilter extends Component {

  state = {
    updateIndex: 0,
    selection: null,
  }

  //changeSelection = selection => this.setState({selection})

  render() {
    const {
      articles,
      selected
    } = this.props;   

    const options = articles.map(article => (
      {
        label: article.title,
        value: article.title,
      }
    ));

    return (
      <div>
        select wrap <br/>
        <Select
          options={options}
          value={this.state.selection}
          onChange={console.log('ok')}
          className="custom-select"
          multi
        />
      </div>
    )
  }


} /*class*/

export default connect(state => ({
  selected: state.filters.selected,
  articles: state.articles
}), {сhangeSelection})(SelectFilter);
//export default SelectFilter;