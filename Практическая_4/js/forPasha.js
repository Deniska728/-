const photos = document.querySelector('.photos')

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let newArray = array.slice(0)
        Array.from(newArray).sort( (a, b) => Math.random() - 0.5 )
    }
}

photos.onclick = e =>{
   let target = e.target
   e.preventDefault()
   while(target != photos){
     if(target.getAttribute('data-img')){
       const arrPhotos = document.querySelectorAll('[data-img="img"]')
       shuffleArray(arrPhotos)
       return
     }
     target = target.parentNode
   }
}


