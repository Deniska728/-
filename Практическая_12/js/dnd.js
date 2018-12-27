let dbx = $('.drop-area')

$(function(){
  dbx.on('dragenter', prevent)
  dbx.on('dragover', prevent)
  dbx.on('drop', drop)
})

let prevent = e => {
  e.preventDefault()
  e.stopPropagation()
}

let drop = e => {
  prevent(e)
  const { files } = e.originalEvent.dataTransfer
  handleFiles(files)
  if (dbx.find('img').length > 0) dbx.find('img').remove()
}

let checkSize = file => {
  return file.size < 3145728 && file.size > 30720
}

let handleFiles = files => {
  for(let file of files){
    if(!!file.type.match('image')){
      if(checkSize(file)){
        let img = $('<img>', { alt: '' })
        let reader = new FileReader()
        let findImg = $('section > figure').find('img')
        reader.onloadend = () => {
            img.attr('src', reader.result)
        }
        reader.readAsDataURL(file)
        if(findImg) findImg.remove()
        $('section > figure').append(img)
      } else {
        alert('Добавляемое изображение должно быть не менее 30Кб и не более 3Мб')
      }
    } else{
      alert('Вы добавляете не изображение')
    }
  }
}