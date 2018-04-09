const css = require('./app.css');
import React from "react";
import {render} from "react-dom";
// import Article  from "./article/article.jsx";
import ArticleClass  from "./article/article-class.jsx";
import ArticleList  from "./article/article-list.jsx";
import Modals  from "./modals/modals.jsx";
import {articles} from "./data.js";

class App extends React.Component {
  render() {
  	return (
  		<React.Fragment>
        <h1>App</h1>
  			<ArticleClass
          id={1}
          title="article Class"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <Modals />
        <br />
        <ArticleList articles={articles} />
  		</React.Fragment>
  	)
  }
}

render(
  <App />,
  document.getElementById('root')
);