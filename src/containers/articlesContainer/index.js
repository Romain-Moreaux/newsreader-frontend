import React from 'react'
import { Article } from '../../components'
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from './styles/articleContainer'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
// import { getArticleIds } from '../services/hnApi'

function ArticlesContainer() {
  const { count } = useInfiniteScroll()
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
      </ArticlesContainerWrapper>
    </>
  )
}

export default ArticlesContainer
