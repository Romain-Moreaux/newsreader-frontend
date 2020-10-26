import React, { useEffect, useState } from 'react'
import { getStoryIds, getStory } from '../services/hnApi'

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
    // getStory('24893771').then((data) => console.log(data))
  }, [])
  return <div>{storyIds}</div>
}

export default StoriesContainer
