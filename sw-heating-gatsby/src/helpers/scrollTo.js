export const scrollToElement = (props) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  const idName = props.toLowerCase()
  if (document.querySelector(`#${idName}`))
    // return window.scrollTo(0, document.querySelector(`#${idName}`).offsetTop)
    return window.scrollTo(0, `${document.querySelector(`#${idName}`).offsetTop + 127}`)

}

export const scrollToParent = (props) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  const idName = props.toLowerCase()
  if (document.querySelector(`#${idName}`))
    return window.scrollTo(0, `${document.querySelector(`#${idName}`).offsetParent.offsetTop + 127}`)
}

export const getOffSetTopValue = (props) => {
  // let element = document.querySelector(`#${idName}`).offsetTop
  // element.scrollIntoView(true)
  // window.scrollTo(0, -130)
  const idName = props.toLowerCase()
  if (document.querySelector(`#${idName}`))
    return document.querySelector(`#${idName}`).offsetTop
}