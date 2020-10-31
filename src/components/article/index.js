import React, { memo } from 'react'
import { mapTime } from '../../mappers/mapTime'
// import { getArticle } from '../../services/hnApi'
import {
  ArticleMeta,
  ArticleMetaElement,
  ArticleTitle,
  ArticleWrapper,
} from './styles/article'

export default memo(function Article({ article }) {
  // const [article, setArticle] = useState({})

  // useEffect(() => {
  //   getArticle(articleId).then((data) => data && data.url && setArticle(data))
  // }, [articleId])

  return (
    <ArticleWrapper data-testid="article">
      <ArticleTitle>
        <a href={article.url}>{article.title}</a>
      </ArticleTitle>
      <ArticleMeta>
        <span className="article__by" data-testid="article-by">
          <ArticleMetaElement color="#000">By: </ArticleMetaElement>
          {article.by}
        </span>
        <span className="article__time" data-testid="article-time">
          <ArticleMetaElement color="#000">Posted:</ArticleMetaElement>
          {mapTime(article.time)}
        </span>
      </ArticleMeta>
    </ArticleWrapper>
  )
})
