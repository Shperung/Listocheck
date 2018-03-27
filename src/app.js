const css = require('./app.css');
import React from "react";
import {render} from "react-dom";
import Article  from "./article/article.js";
import Modals  from "./modals/modals.js";

class App extends React.Component {
    render() {
  	return (
  		<React.Fragment>
        <h1>App</h1>
  			<Article />
        <Modals />
  		</React.Fragment>
  	)
  }
}

render(
  <App />,
  document.getElementById('root')
);