class Game {
  constructor(w,h){
    this.w = w
    this.h = h
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.w
    this.canvas.height = this.h
    document.body.appendChild(this.canvas)

    this.ctx = this.canvas.getContext('2d')
    this.player = new Player(this)
    this.bullets = new Bullets(this)
    this.zombie = new Zombie(this)
    this.explode = new Explode(this)
    this.hp = new HP(this)

    this.isPlay = true
    this.loop()
    
  }

  loop() {
    this.update()
    this.draw()
    if(this.isPlay) {
      window.requestAnimationFrame(() => this.loop())
    }
  }

  update() {
    this.player.update()
    this.bullets.update()
    this.zombie.update()
    this.explode.update()
    this.hp.update()
  }

  draw () {
    this.ctx.clearRect(0 , 0 , this.w, this.h)
    this.player.draw()
    this.zombie.draw()
    this.bullets.draw()
    this.explode.draw()
    this.hp.draw()
  }
}