class Ball{
    constructor(x,y,diameter){
     var options={
         isStatic:false,
         restitution: random (1,2),
         friction:0.5,
         density:1
     }
     this.r=diameter/2
  
      this.body= Bodies.circle (x,y,this.r,options);
      
  
      
  
      World.add(world,this.body);
  }
  display(){
     
    var pos=this.body.position;
      
      fill ("orange")
      ellipseMode (RADIUS)
      ellipse(pos.x,pos.y,this.r,this.r)
    
      
  }
  
  };