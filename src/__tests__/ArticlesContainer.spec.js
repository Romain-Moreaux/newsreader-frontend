import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { STORY_INCREMENT } from '../constants'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { allArticles, noArticles } from '../fixtures'
import ArticlesContainer from '../containers/ArticlesContainer'
import { GET_ALL_ARTICLES } from '../graphql/get-all-articles'
import { cleanup, render, waitFor } from '@testing-library/react'

beforeEach(() => {
  cleanup()
  jest.resetAllMocks()
})

jest.mock('../hooks/useInfiniteScroll')

test('renders < ArticlesContainer /> with a articles', async () => {
  const allArticlesMocks = [
    {
      request: {
        query: GET_ALL_ARTICLES,
      },
      result: {
        data: {
          ...allArticles,
        },
      },
    },
  ]

  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }))

  const { getByText, queryByTestId, debug } = render(
    <MockedProvider mocks={allArticlesMocks} addTypename={false}>
      <ArticlesContainer />
    </MockedProvider>
  )
  await waitFor(() => [
    expect(getByText('News Articles')).toBeTruthy(),
    expect(getByText('Story from home')).toBeTruthy(),
    expect(queryByTestId('article-author').textContent).toEqual(
      'Author: Romain Moreaux'
    ),
  ])

  debug()
})

test('does not render articles when there is no articles', async () => {
  const noArticlesMocks = [
    {
      request: {
        query: GET_ALL_ARTICLES,
      },
      result: {
        data: {
          ...noArticles,
        },
      },
    },
  ]

  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }))

  const { queryByText, queryByTestId, debug } = render(
    <MockedProvider mocks={noArticlesMocks} addTypename={false}>
      <ArticlesContainer />
    </MockedProvider>
  )

  await waitFor(() => [
    expect(queryByText('News Articles')).toBeTruthy(),
    expect(queryByText('Story from home')).toBeFalsy(),
    expect(queryByTestId('article-author')).toBeFalsy(),
  ])

  debug()
})
