import React from 'react'
import { getStory } from '../services/hnApi'
import { singularStory } from '../fixtures'
import { act } from 'react-dom/test-utils'
import { Story } from '../components'
const { cleanup, render, waitFor } = require('@testing-library/react')

beforeEach(() => {
  cleanup()
  jest.resetAllMocks()
})

jest.mock('../services/hnApi.js', () => ({
  getStory: jest.fn(),
}))

test('renders the Story component with content', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory))

  await act(async () => {
    const { getByText, getByTestId } = render(<Story storyId="1" />)

    await waitFor(() => [
      expect(getByTestId('story')).toBeTruthy(),
      expect(getByText('Story from home')).toBeTruthy(),
      expect(getByTestId('story-by').textContent).toEqual('By: Romain Moreaux'),
    ])
  })
})
