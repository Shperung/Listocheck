const css = require('./app.css');
import React from "react";
import {render} from "react-dom";
import Article  from "./article/article.jsx";
import Modals  from "./modals/modals.jsx";

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