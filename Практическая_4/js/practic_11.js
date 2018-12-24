const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.height = 140
canvas.width = 280
const randomRGBA = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min) 
    rand = Math.floor(rand) 
    return rand  
}
let gradient = ctx.createLinearGradient(0, 0, 0, 60)

 console.log(randomRGBA(0, 200))
gradient.addColorStop(0.0, `rgba(${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${Math.random()})`)
gradient.addColorStop(0.5, `rgba(${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${Math.random()})`)
gradient.addColorStop(1,   `rgba(${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${randomRGBA(0, 200)}, ${Math.random()})`)

ctx.font = '70px sans-serif'
ctx.fillStyle = gradient
ctx.fillText(':-)', 80, 50)