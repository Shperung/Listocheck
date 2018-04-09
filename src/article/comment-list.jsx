//Stateless Functional Components
import React from "react";
import Commemt from "./comment.jsx";

export default function CommentList(props) {
const {
		comments = []
	} = props;

	return (
 	 <React.Fragment>
	    {
	     comments.length > 0 ? 
	        comments.map((comment) => 
	          <Commemt 
	            key={comment.id}
	            user={comment.user}
	            text={comment.text}
	          />
	        )
	      : (
	      	<mark>Not comments</mark>
	      )
	    }
	  </React.Fragment>
	)

}