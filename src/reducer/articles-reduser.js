//import {articles as defaultArticles} from "../data.js"; 
import {normalizedArticles as defaultArticles} from "../fixtures.js";
import {
  DELETE_ARTICLE
} from "../constants.js";

export default (articleState = defaultArticles, action) => {
	const {type, payload} = action;

	switch(type) {
		case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id ); //Возвращаем новый обект без удаленной стати
	}

	return articleState;
}