export const debounce = (func, wait, immediate, args) => {
  let timeout
  console.log('debounce ARGS', timeout)
  return () => {
    const context = this
    const callNow = immediate && !timeout

    const later = () => {
      console.log('called later')
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) {
      console.log('callNow')
      func.apply(context, args)
    }
  }
}
