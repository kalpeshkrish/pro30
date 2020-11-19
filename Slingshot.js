class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    attach(body) {

        this.sling.bodyA = body;

    }
    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("turquoise");
           
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            pop();
        }
    }

    fly() {
        this.sling.bodyA =null;
    }

    
}