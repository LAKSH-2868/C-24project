class Rubber{
    constructor(x,y){
        var option={
            'restitution':1,
            'friction':1.0,
            'density':1
        }
        this.body= Bodies.circle(x,y,50,option);
        this.radius= 50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("green");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}