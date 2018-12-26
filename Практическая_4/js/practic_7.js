const photos = document.querySelector('.photos')

const shuffle = arr => { 
  let j, temp
  for(let i = arr.length - 1; i > 0; i--){ 
    j = Math.floor(Math.random()*(i + 1)) 
    temp = arr[j]
    console.log(arr[i])
    arr[j] = arr[i]
    arr[i] = temp
    console.log(arr[i])
  } 
  return arr
}

photos.onclick = e =>{
  let target = e.target
  e.preventDefault()
  while(target != photos){
    if(target.getAttribute('data-img')){
      const newArr = []
      let arrPhotos = document.querySelectorAll('[data-img="img"]')
      arrPhotos.forEach( img => {
         newArr.push(img.src)
      })
      const imgArr = shuffle(newArr)
      for (const img in arrPhotos){
        arrPhotos[img].src = imgArr[img]
      }
      console.log(arrPhotos)
      return
     }
     target = target.parentNode
  }
}