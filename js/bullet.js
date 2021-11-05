class Bullets {
    constructor (game) {
        this.game = game
        this.r = BULLET_RADIUS
        this.v = BULLET_SPEED

        this.bullets = []

        document.onclick = () => {
            this.bullets.push({
                x : this.game.player.x + this.game.player.w / 2 ,
                y : this.game.h - this.game.player.h - this.r,
                dmg : 10
            })
        }
    }

    update() {
        this.bullets.forEach((bullet , i) => {
            bullet.y -= this.v
            if(bullet.y <= 0) this.bullets.splice(i , 1)
            if(
                bullet.y - this.r <= this.game.zombie.y + this.game.zombie.h && 
                bullet.y + this.r >= 100 && 
                bullet.x - this.r >= this.game.zombie.x &&
                bullet.x + this.r <= this.game.zombie.x + this.game.zombie.w && 
                !this.game.zombie.isDead
            ) {
                this.bullets.splice(i , 1)
                this.game.explode.explodes.push({o : 1 , r : 10 , x : bullet.x , y : bullet.y})
                this.game.zombie.currentHP -= bullet.dmg

                if(this.game.zombie.currentHP <= 0) {
                    this.game.zombie.isDead = true
                }

            }
        })
    }

    draw () {
        this.bullets.forEach(({x , y}) => {
            this.game.ctx.beginPath()
            this.game.ctx.fillStyle = '#00ff00'
            this.game.ctx.arc(x,y,this.r,0,Math.PI * 2)
            this.game.ctx.fill()
            this.game.ctx.closePath()
        })
    }
}