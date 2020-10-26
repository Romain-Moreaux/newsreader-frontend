import React from 'react'
import { STORY_INCREMENT } from '../constants'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { getStory, getStoryIds } from '../services/hnApi'
import { singularStory, storyIds } from '../fixtures'
import { act } from 'react-dom/test-utils'
import { App } from '../App'
const { cleanup, render, waitFor } = require('@testing-library/react')

beforeEach(cleanup)

jest.mock('../hooks/useInfiniteScroll.js')
jest.mock('../services/hnApi.js', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}))

test('renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }))
  getStory.mockImplementation(() => Promise.resolve(singularStory))
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />)

    await waitFor(() => [
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(getByText('Story from home')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual(
        'By: Romain Moreaux'
      ),
    ])
  })
})
