class Game {
  contructor(w,h){
    this.w = w
    this.h = h
    
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.w
    this.canvas.height = this.h
    console.log(12)
    document.body.appendChild(this.canvas)
  }
}