class pig{
    constructor(x,y){
        var options = {
            restitution :0.2,
            friction : 0.8,
            density :1
        }
        this.pig = Bodies.rectangle(x,y,50,50,options)
        World.add(world, this.pig)

        this.width = 50
        this.height = 50
    }

    display(){
        var pos = this.pig.position
        push()
        translate(pos.x, pos.y)
        rotate(this.pig.angle)
        fill("green")
        stroke("cyan")
        strokeWeight(3)
        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }


}