class Box{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.box = Bodies.rectangle(x,y,w,h,options)
        World.add(world, this.box)

        this.width = w
        this.height = h
    }

    display(){
        var pos = this.box.position
        push()
        translate(pos.x, pos.y)
        rotate(this.box.angle)
        fill("red")
        stroke("blue")
        strokeWeight(3)
        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }


}