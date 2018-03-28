// Functional Components
import React from "react";

export default function Article(props) {
	const {
		id,
		title,
		text
	} = props;
	return (
		<article key={id}>
			<h3>{title}</h3>
			<p>{text}</p>
		</article>
	)
}