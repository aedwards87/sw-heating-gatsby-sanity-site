export const scrollToElement = (idName) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  if (document.querySelector(`#${idName}`)) 
  return window.scrollTo(0, document.querySelector(`#${idName}`).offsetTop)
}

export const scrollToParent = (idName) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  if (document.querySelector(`#${idName}`)) 
  return window.scrollTo(0, `${document.querySelector(`#${idName}`).offsetParent.offsetTop + 127}`)
}

export const getOffSetTopValue = (idName) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  if (document.querySelector(`#${idName}`)) 
  return document.querySelector(`#${idName}`).offsetTop
}