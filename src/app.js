const css = require('./app.less');
import React from "react";
import {render} from "react-dom";
import Article  from "./article/article.js";
import Modals  from "./modals/modals.js";

class App extends React.Component {
    render() {
  	return (
  		<React.Fragment>
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