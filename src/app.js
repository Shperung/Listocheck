const css = require('./app.less');


import React from "react";
import {render} from "react-dom";

import Article  from "./article/article.js";

function App() {
	return (
		<section>
			<h1>Listocheck</h1>
			<Article />
		</section>
	)
}


render(
  <App />,
  document.getElementById('root')
);