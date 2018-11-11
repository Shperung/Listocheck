import {
  DELETE_ARTICLE
} from "../constants.js";

export function deleteArticles(id) {
	console.log('deleteArticles - action ', id);
	return {
		type: DELETE_ARTICLE, // обязательно
		payload: { // договоренность что все парасетры передаются через payload
			id
		}
	}
}