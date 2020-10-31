import React from 'react'
import { Article } from '../../components'
import { useQuery } from '@apollo/react-hooks'
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from './styles/articlesContainer'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { GET_ALL_ARTICLES } from '../../graphql/get-all-articles'

function ArticlesContainer() {
  const { count } = useInfiniteScroll()
  const { data: { allArticles = [] } = {} } = useQuery(GET_ALL_ARTICLES)

  return (
    <>
      <GlobalStyle />
      <ArticlesContainerWrapper data-testid="articles-container">
        <h1>News Articles</h1>
        {allArticles &&
          allArticles
            .slice(0, count)
            .map((article) => <Article article={article} key={article.id} />)}
      </ArticlesContainerWrapper>
    </>
  )
}

export default ArticlesContainer
