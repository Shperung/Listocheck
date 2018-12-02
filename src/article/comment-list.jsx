//Stateless Functional Components
import React from "react";
import Commemt from "./comment.jsx";
import Input from "../form/input.jsx";
import Textarea from "../form/textarea.jsx";

export default function CommentList(props) {
const {
		comments = []
	} = props;

	return (
 	 <React.Fragment>
	    {
	     comments.length > 0 ? 
	        comments.map((id) => 
	          <Commemt 
	            key={id}
	            id={id}
	          />
	        )
	      : (
	      	<mark>Not comments</mark>
	      )
	    }
	    <form action="" className="new-comment-form">
	    	<h3>Add comment</h3>
	    	<Input label="Name =>" />
	    	<br/><br/><br/>
	    	<Textarea label="Comment =>" />
	    </form>
	  </React.Fragment>
	)

}
