import {articles as defaultArticles} from "../data.js";

export default (articleState = defaultArticles, action) => {
	const {type} = action;

	switch(type) {
		case 'DELETE_ARTICLE': return articleState;
	}

	return articleState;
}