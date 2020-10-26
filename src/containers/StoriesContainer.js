import React, { useEffect, useState } from 'react'
import { Story } from '../components'
import { getStoryIds } from '../services/hnApi'

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, [])
  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map((storyId) => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </>
  )
}

export default StoriesContainer
