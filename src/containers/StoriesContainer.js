import React, { useEffect, useState } from 'react'
import { Story } from '../components'
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../components/story/styles/storyContainer'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { getStoryIds } from '../services/hnApi'

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([])
  const { count } = useInfiniteScroll()

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, [])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper>
        <h1>Hacker News Stories</h1>
        {storyIds?.slice(0, count).map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  )
}

export default StoriesContainer
