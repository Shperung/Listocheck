const css = require('./app.css');
import React from "react";
import {render} from "react-dom";
// import Article  from "./article/article.jsx";
import ArticleClass  from "./article/article-class.jsx";
import ArticleList  from "./article/article-list.jsx";
import Modals  from "./modals/modals.jsx";
import {articles} from "./data.js";


class App extends React.Component {

  componentWillMount(){
    //debugger
    console.log('componentWillMount');
  }
  render() {
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
        <ArticleList articles={articles} />

  		</React.Fragment>
  	)
  }
  componentDidMount(){
    //debugger
    console.log('componentDidMount');
  }
} /* App */

render(
  <App />,
  document.getElementById('root')
);