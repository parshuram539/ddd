class Slingshot{
    constructor(pointA, pointB){
        var options = {
            pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rock=loadImage("rock.png");
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        image(this.rock,150,200,20,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
          
           // write stroke() to set the color to red
stroke(64,224,208);
           // Write line() to draw a line from pointA to pointB
           line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}