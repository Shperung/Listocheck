//Stateless Functional Components
import React from "react";
import ArticleClass  from "./article-class.jsx";
export default function ArticleList({articles}) {

	/*const articleElements = 
		articles.map((article) =>
			<ArticleClass 
				key={article.id}
				id={article.id}
				title={article.title}
				text={article.text}
			/>
		);*/

	return (
		<div>
			{
				articles.map((article) =>
					<ArticleClass 
						key={article.id}
						id={article.id}
						title={article.title}
						text={article.text}
						comments={article.comments}
					/>
				)
			}
		</div>
	)
}