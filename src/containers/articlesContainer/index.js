import React from 'react'
import { Article } from '../../components'
import { useQuery } from '@apollo/react-hooks'
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from './styles/articleContainer'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { GET_ALL_ARTICLES } from '../../graphql/get-all-articles'
// import { getArticleIds } from '../services/hnApi'

function ArticlesContainer() {
  const { count } = useInfiniteScroll()
  const { data: { allArticles = [] } = {} } = useQuery(GET_ALL_ARTICLES)
  // const [articleIds, setArticleIds] = useState([])

  // useEffect(() => {
  //   getArticleIds().then((data) => setArticleIds(data))
  // }, [])

  return (
    <>
      <GlobalStyle />
      <ArticlesContainerWrapper data-testid="articles-container">
        <h1>News Articles</h1>
        {/* {articleIds?.slice(0, count).map((articleId) => (
          <Article articleId={articleId} key={articleId} />
        ))} */}
        {allArticles?.slice(0, count).map((article) => (
          <Article articleId={article.id} key={article} />
        ))}
      </ArticlesContainerWrapper>
    </>
  )
}

export default ArticlesContainer
