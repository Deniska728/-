let min = 0,
    sec = 0,
    hours = 0
let count = 0

let timerId = setInterval( () => {
  count += 5
  sec = count
  if(sec >= 60){
    min++
    count = sec = 0
  }
  if(min >= 60){
    hours++
    min = 0
  }
  sec < 10 ? sec = '0' + sec : sec = sec
  min < 10 && String(min).length < 2 ? min = '0' + min : min = min
  document.querySelector('#timer').innerHTML = `${hours}:${min}:${sec}`
}, 5000)

let brow = navigator.userAgent
let aboutBrow = brow.match(/[A-Za-z]+\/[0-9]{2}\.[0-9]/g)
document.querySelector('#about-brow').innerHTML = `Ваш браузер ${aboutBrow}`
