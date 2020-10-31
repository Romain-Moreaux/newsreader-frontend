import React, { memo } from 'react'
import { mapTime } from '../../mappers/mapTime'
import {
  ArticleMeta,
  ArticleMetaElement,
  ArticleTitle,
  ArticleWrapper,
} from './styles/article'

export default memo(function Article({ article }) {
  return (
    <ArticleWrapper data-testid="article">
      <ArticleTitle>
        <a href={article.url}>{article.title}</a>
      </ArticleTitle>
      <ArticleMeta>
        <span className="article__by" data-testid="article-author">
          <ArticleMetaElement color="#000">Author: </ArticleMetaElement>
          {article.author}
        </span>
        <span className="article__time" data-testid="article-time">
          <ArticleMetaElement color="#000">Posted:</ArticleMetaElement>
          {mapTime(article.time)} ago
        </span>
      </ArticleMeta>
    </ArticleWrapper>
  )
})
