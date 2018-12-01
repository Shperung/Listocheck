import {
  DELETE_ARTICLE,
  CHANGE_SELECTION
} from "../constants.js";

export function deleteArticles(id) {
	console.log('deleteArticles - action ', id);
	return {
		type: DELETE_ARTICLE, // обязательно
		payload: { // договоренность что все параметры передаются через payload
			id
		}
	}
}

export function сhangeSelection(id) {
	console.log('сhangeSelection - action ', id);
	return {
		type: CHANGE_SELECTION, // обязательно
		payload: { // договоренность что все параметры передаются через payload
			id
		}
	}
}


