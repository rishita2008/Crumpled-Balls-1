class Paper {
    constructor(){
        var options={
            isStatic: false
            ,restitution: 0.5
            ,friction: 0.5
            ,density: 2    

        }
        
      this.body=Bodies.circle(110,20,20,options)  
      World.add(world,this.body)
    }
    
    display(){
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,20)  
    }
}