const images = document.querySelectorAll('header img, .captioned-gallery img, .content img')
const textFromPage = document.querySelectorAll('p.info, h3')
let finalText = ''

textFromPage.forEach( txt => {
  finalText += ` ${txt.innerHTML.trim()}`
})

const createElem = (windowNew, element) => {
  return windowNew.document.createElement(element)
}

const searchInPage = (e, newWindow, inputValue) => {
  e.preventDefault()
  let pr = newWindow.document.querySelector('p')
  pr.innerHTML = finalText
  let test = pr.innerHTML.match(new RegExp(inputValue, 'g'))
  if(test != null && inputValue){
    pr.innerHTML = ' '+ pr.innerHTML.replace(new RegExp(inputValue, 'g'), '<span style="background: #e5ff00">' + inputValue + '</span>')
  } else if(inputValue){
    newWindow.alert('Ничего не найдено')
  }
}

const openNewWindow = () =>{
  const newWindow = window.open()
  const form = createElem(newWindow, 'form')
  const inputSearch = createElem(newWindow, 'input')
  const inputSubmit = createElem(newWindow, 'input')
  const p = createElem(newWindow, 'p')
  let inputValue = ''
  p.innerHTML = finalText
  inputSubmit.type = 'submit'
  inputSubmit.value = 'Найти'
  inputSearch.type = 'search'

  inputSearch.oninput = function(e){ inputValue = e.target.value }

  newWindow.document.body.appendChild(form)
  newWindow.document.body.appendChild(p)
  form.addEventListener('submit', (e) => { searchInPage(e, newWindow, inputValue) })
  form.appendChild(inputSearch)
  form.appendChild(inputSubmit)
}

images.forEach( img => {
  img.addEventListener('click', openNewWindow, false)
})