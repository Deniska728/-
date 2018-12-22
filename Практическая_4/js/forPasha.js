// const photos = document.querySelector('.photos')

// photos.onclick = function(e){
//   let target = e.target
//   e.preventDefault()
//   while(target != photos){
//     if(target.getAttribute('data-img')){
//       const arrPhotos = document.querySelectorAll('[data-img="img"]')
//       console.log(arrPhotos[0])
//       shuffleArray(arrPhotos[0])
//       console.log(arrPhotos[0])
//       return
//     }
//     target = target.parentNode;
//   }
  
// }

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//   }
// }