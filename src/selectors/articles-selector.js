import { createSelector } from 'reselect'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const filteredArticlesSelector = createSelector(
	articlesGetter,
	filtersGetter,
	(articles, filters) => {
		const {selected} = filters;
		return articles.filter(article => {
			return (!selected.length || selected.includes(article.id))
		});
	}
);


// простая функция без оптимизации
/*export function filteredArticlesSelector({filters, articles}) {
		const {selected} = filters;
		return articles.filter(article => {
			return (!selected.length || selected.includes(article.id))
		});
}*/