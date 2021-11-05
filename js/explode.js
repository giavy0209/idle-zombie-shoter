class Explode {
    constructor(game) {
        this.game = game

        this.explodes = []

    }

    update () {
        this.explodes.forEach((explode , index) => {
            explode.o -= 0.02
            explode.r += 2.5
            if(explode.o <= 0 || explode.r >= 50) this.explodes.splice(index, 1)
        })
    }

    draw () {
        this.explodes.forEach(({o , r,x, y}) => {
            this.game.ctx.beginPath()
            this.game.ctx.fillStyle = `rgba(255,255,255 , ${o})`
            this.game.ctx.arc(x, y ,r , 0 , Math.PI * 2)
            this.game.ctx.fill()    
            this.game.ctx.closePath()
        })
    }
}