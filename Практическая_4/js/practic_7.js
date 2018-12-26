const photos = document.querySelector('.photos')

const shuffle = arr => { 
  let j, temp
  for(let i = arr.length - 1; i > 0; i--){ 
    j = Math.floor(Math.random()*(i + 1)) 
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  } 
  return arr
}

photos.onclick = e =>{
  let target = e.target
  e.preventDefault()
  while(target != photos){
    if(target.getAttribute('data-img')){
      const arrPhotos = document.querySelectorAll('[data-img="img"]')
      const newArr = [] 
      arrPhotos.forEach( img => {
         newArr.push(img.src)
      })
      const imgArr = shuffle(newArr)
      for (const img in arrPhotos){
        arrPhotos[img].src = imgArr[img]
      }
      return
     }
     target = target.parentNode
  }
}