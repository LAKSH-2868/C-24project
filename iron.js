class Iron{
    constructor(x,y,width,height){
        var option = {
            'restitution':1,
            'density':1,
            'friction':1
            }
        this.body = Bodies.rectangle(x,y,100,100,option)
        this.width = 100;
        this.height=100;
        World.add(world,this.body); 
        }

        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            fill("grey");
            rect(0,0,this.width,this.height)
            pop();
        }

    }


