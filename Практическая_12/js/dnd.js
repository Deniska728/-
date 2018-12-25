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
    return file.size < 25165824 && file.size > 30720
}

let handleFiles = files => {
    for(let file of files){
        if(!!file.type.match('image') && checkSize(file)){
            let img = $('<img>', { alt: '' })
            let reader = new FileReader()
            let findImg = $('section > figure').find('img')
            reader.onloadend = () => {
                img.attr('src', reader.result)
            }
            reader.readAsDataURL(file)
            if(findImg) findImg.remove()
            $('section > figure').append(img)
        }
    }
}