class Player {
    constructor (game) {
        this.game = game
        this.w = PLAYER_WIDTH
        this.h = PLAYER_HEIGHT
        
        this.x = this.game.w / 2 - this.w / 2
        this.y = this.game.h - this.h - 20
    }

    update () {
        
    }

    draw() {
        this.game.ctx.beginPath()
        this.game.ctx.fillStyle = '#ff0000'
        this.game.ctx.fillRect(this.x , this.y , this.w , this.h)
        this.game.ctx.closePath()
    }
}