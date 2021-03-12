class Mango{
    constructor(x, y, r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        push ();
        elllipseMode(CENTER);
        circle(pos.x, pos.y, this.r);
        pop ();
    }
}