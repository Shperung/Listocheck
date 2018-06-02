const css = require('./app.css');
import React from "react";
import {render} from "react-dom";
// import Article  from "./article/article.jsx";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ArticleClass  from "./article/article-class.jsx";
import ArticleList  from "./article/article-list.jsx";
import Modals  from "./modals/modals.jsx";
import Input from "./form/input.jsx";
import {articles} from "./data.js";



class App extends React.Component {

  state = {
    updateIndex: 0,
    selection: null,
  }

  componentWillMount(){
    //debugger
    //console.log('componentWillMount');
  }

  componentDidMount(){
    //console.log('componentDidMount');
  }

  componentDidUpdate(){
    //console.log('componentDidUpdate');
  }

  componentWillUnount(){
    //console.log('componentWillUnount');
  }

  render() {

    const options = articles.map(article => (
      {
        label: article.title,
        value: article.title,
      }
    ));

  	return (
  		<React.Fragment>
        <h1>App</h1>
  			
        <h2>Тест одной статичной стьи</h2>
        <ArticleClass
          id={1}
          title="article Class"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />

        <h2>Тест модалок</h2>
        <Modals />

        <h2>Тест списка статей</h2>
        <ArticleList  ref={this.testArticleList} articles={articles} />

        <button 
          //onClick = {() => this.setState(updateIndex: this.state.updateIndex + 1)}
          // onClick = {() => //console.log('click ', this.state.updateIndex + 1)}
          onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}
        >
          Тест полного перегенирирования
        </button>
        <br/><br/>
        <b ref={this.testRef} className="click-here" key={this.state.updateIndex}>
          Полное перегинерирование this.state.updateIndex - {this.state.updateIndex}
        </b>

        <br/><br/>
        <Input />

        <Select
          options={options}
          value={this.state.selection}
          onChange={this.changeSelection}
          className="custom-select"
        />

  		</React.Fragment>
  	)
  }



  changeSelection = selection => this.setState({selection})

  testRef = ref => {
    // //console.log('testRef ref ', ref);
  }

  testArticleList = ref => {
    // //console.log('testArticleList ref ', ref);
    ref.testParam = 1;  // Насильно передаем параметор или чтото делаю но так лучше не делать
  }

} /* App */

render(
  <App />,
  document.getElementById('root')
);