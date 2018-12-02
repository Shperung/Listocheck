//Class
import React, {Component} from "react";
import {connect} from "react-redux";
import {filteredArticlesSelector} from "../selectors/articles-selector.js";
import ArticleClass  from "./article-class.jsx";


class ArticleList extends Component {
	state = {
		openArticleId: null
	}

	render(){
		console.log('articles render');
		const {
			articles = null
		} = this.props;

	
		const {
			openArticleId
		} = this.state;

		return (
			<div>
				{
					articles && articles.length > 0 ? articles.map((article) =>
						<ArticleClass 
							key={article.id}
							id={article.id}
							title={article.title}
							text={article.text}
							comments={article.comments}
							isOpen={article.id === openArticleId}
							toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
						/>
					) : (
						<b className="empty-msg">
							!-------Empty articles--------!
						</b>
					)
				}
			</div>
		)
	}

	toggleOpenArticle(openArticleId) {
		this.setState({openArticleId});
	}
} /* class */


export default connect((state) => {
	return {
		articles: filteredArticlesSelector(state)
	}
})(ArticleList);