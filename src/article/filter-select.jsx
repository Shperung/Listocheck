// Class
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';

import {changeSelection} from "./article-action.js";


class SelectFilter extends Component {

  //changeSelection = selection => this.setState({selection})
  handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

  render() {
    const {
      articles,
      selected
    } = this.props;   


    console.log('this.props', this.props);

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
          value={selected}
          onChange={this.handleChange}
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
}), {changeSelection})(SelectFilter);
//export default SelectFilter;