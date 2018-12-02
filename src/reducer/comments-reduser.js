import {normalizedComments as defaultComments} from "../fixtures.js";
import {
  
} from "../constants.js";

export default (commentState = defaultComments, action) => {
	const {type, payload} = action;

	switch(type) {
		
	}

	return commentState;
}