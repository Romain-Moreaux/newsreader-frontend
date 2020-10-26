import React, { useEffect, useState } from 'react'
import { Story } from '../components'
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../components/story/styles/storyContainer'
import { getStoryIds } from '../services/hnApi'

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds.map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  )
}

export default StoriesContainer
