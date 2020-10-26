import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const newStoryUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data)
  return result
}

export const getStoryIds = async () => {
  const result = await axios.get(newStoryUrl).then(({ data }) => data)
  return result
}
