class Game {
  contructor(w,h){
    this.w = w
    this.h = h
    
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.w
    this.canvas.height = this.h
    
    document.body.appendChild(this.canvas)
  }
}