class HP {
    constructor (game) {
        this.game = game
        this.h = HP_HEIGHT
    }

    update () {

    }

    draw () {
        this.game.ctx.beginPath() 

        this.game.ctx.fillStyle = '#ccc'
        this.game.ctx.fillRect(0 , 0 , this.game.w , this.h)

        this.game.ctx.fillStyle = '#ff0000'
        this.game.ctx.fillRect(0 , 0 , this.game.w * this.game.zombie.currentHP / this.game.zombie.hp , this.h)

        this.game.ctx.closePath()
    }
}