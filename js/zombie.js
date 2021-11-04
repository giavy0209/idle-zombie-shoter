class Zombie {
    constructor (game) {
        this.game = game 
        this.w = ZOMBIE_WIDTH
        this.h = ZOMBIE_HEIGHT
        this.x = this.game.w / 2 - this.w / 2
        this.y = 100

        this.hp = 100
        this.currentHP = 100

        this.opacity = 1

        this.isDead = false

        this.imgs = [
            new Image(),
            new Image(),
            new Image(),
            new Image(),
        ]

        this.img = this.randomZombie()

        this.totalLoaded = 0

        this.imgs.forEach((img , index) => {
            img.src = `/images/z${index+1}.png`
            img.onload = () => this.totalLoaded += 1 
        })
    }

    randomZombie () {
        const random = Math.round(Math.random() * (this.imgs.length - 1))
        console.log(random);
        return this.imgs[random]
    }

    update () {
        if(this.isDead) {
            this.opacity -= 0.005
            if(this.opacity <= 0) {
                this.img = this.randomZombie()
                this.isDead = false
                this.opacity = 1
                this.currentHP = this.hp
            }
        }
    }

    draw () {
        this.game.ctx.beginPath()
        this.game.ctx.globalAlpha = this.opacity
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
        this.game.ctx.globalAlpha = 1

        this.game.ctx.closePath()
        
    }
}