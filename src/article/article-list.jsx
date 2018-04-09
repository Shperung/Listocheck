//Class
import React, {Component} from "react";
import ArticleClass  from "./article-class.jsx";
export default class ArticleList extends Component {
	state = {
		openArticleId: null
	}

	render(){
		const {
			articles = {}
		} = this.props;

		const {
			openArticleId
		} = this.state;

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
							isOpen={article.id === openArticleId}
							toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
						/>
					)
				}
			</div>
		)
	}

	toggleOpenArticle(openArticleId) {
		this.setState({openArticleId});
	}
} /* class */