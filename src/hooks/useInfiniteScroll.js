import { useEffect, useState } from 'react'
import { MAX_STORIES, STORY_INCREMENT } from '../constants'
import { debounce } from '../utils/debounce'

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(STORY_INCREMENT)

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false
    }
    setLoading(true)
  }, 500)

  useEffect(() => {
    if (!loading || count === MAX_STORIES) return
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES)
    } else {
      setCount(count + STORY_INCREMENT)
    }

    setLoading(false)
  }, [count, loading])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      console.log('remove listener')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { count }
}
