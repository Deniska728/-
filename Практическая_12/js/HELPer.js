let getCoord = elem => {
  if (elem instanceof jQuery) {
    elem = elem[0]
  }
  let top = elem.getBoundingClientRect().top + pageYOffset
  let bottom = elem.getBoundingClientRect().bottom + pageYOffset
  let right = elem.getBoundingClientRect().right + pageXOffset
  let left = elem.getBoundingClientRect().left + pageXOffset
  return {
    top,
    bottom,
    right,
    left,
    preventTop: 0,
    preventLeft: 0
  }
}

let getSize = elem => {
  if (elem instanceof jQuery) {
    elem = elem[0]
  }
  let width = elem.getBoundingClientRect().right - elem.getBoundingClientRect().left
  let height = elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top
  return {
    width,
    height
  }
}

let setDisplayStyle = (elems, ...styles) => {
  let i = 0
  for(elem in elems){
    elems[elem].css('display', `${styles[i]}`)
    i++
    if( i > elems.length ) return
  }
}

let resetHandlers = (innerImg) => {
  innerImg.draggable({ disabled: true })
  innerImg.css("border", "")
  $('[name="width-plus"]').off('click')
  $('[name="width-minus"]').off('click')
  $('[name="height-plus"]').off('click')
  $('[name="height-minus"]').off('click')
}

let resetHandlersForPriora = () => {
  $('section > figure').find("img:first-child").click(function() {
    let img = $(this.parentNode).find("img:not(:first-child)")
    resetHandlers(img)
  })
}