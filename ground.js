class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.ground)

        this.width = w
        this.height = h
    }
    display(){
        var pos = this.ground.position
        fill("red")
        rectMode(CENTER)
        rect( pos.x,pos.y,this.width, this.height)
    }

}











