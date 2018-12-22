const iconItems = document.querySelectorAll('.icons i')
let intervalId

function handleMouseEnter() {
  let n = 1
  intervalId = setInterval( () => {
    n -= 0.05
    if(n >= 0 && n <= 1){
      this.style.opacity = n
    } else {
      clearInterval(intervalId)
      this.style.opacity = 0
    }
  }, 25)
}

function handleMouseLeave() {
  clearInterval(intervalId)
  this.style.opacity = 1
}

iconItems.forEach( icon => {
  icon.addEventListener('mouseenter', handleMouseEnter)
  icon.addEventListener('mouseleave', handleMouseLeave)
})
