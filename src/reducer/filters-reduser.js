
import {
  DELETE_ARTICLE,
  CHANGE_SELECTION
} from "../constants.js";

const defaultFilters = {
	selected: [],
}

export default (filters = defaultFilters, action) => {
	const {type, payload} = action;

	switch(type) {
	  case CHANGE_SELECTION: 
			return {...filters, selected: payload.selected}

		case DELETE_ARTICLE: 
			return {...filters, selected: filters.selected.filter(id => id !== payload.id)}	
	}

	return filters;
}
