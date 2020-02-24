export const scrollToId = (idName) => {
  let element = document.querySelector(`#${idName}`)
  element.scrollIntoView(true)
  window.scrollBy(0, -130)
}
