export const scrollToId = (idName) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  return window.scrollTo(0, document.querySelector(`#${idName}`).offsetTop)

}
