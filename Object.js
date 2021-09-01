class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;}}


        Vector.prototype.add = function(obj){
            return (new Vector(this.x + obj.x ,this.y + obj.y))
           
        }
        Vector.prototype.sub = function(obj){
            return new Vector(this.x - obj.x ,this.y - obj.y)
           
        }
        Vector.prototype.magnitude = function(){
            return (this.x*this.x + this.y*this.y) > 1 ?Math.sqrt(this.x*this.x + this.y*this.y):1
        }
        Vector.prototype.getDirection = function(){
            return Math.atan2(this.y , this.x)
        }
        Vector.prototype.setMag = function(m){
            var d = this.getDirection();
            this.x = Math.cos(d)*m;
            this.y = Math.sin(d)*m;
            return new Vector(this.x,this.y)

    }







class Particle{
    constructor(x,y,d,mass){
        this.pos =  new Vector(x,y);
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
        this.array = [];
        this.d = d;
        this.mass = mass;
        this.move = function(obj1,obj2){
            let f1 = obj1.pos.sub(this.pos)
            let d1sq = f1.magnitude()
            let mag1 = (obj1.mass * this.mass)/d1sq

            let f2 = obj2.pos.sub(this.pos)
            let d2sq = f2.magnitude()
            let mag2 = (obj2.mass * this.mass)/d2sq
                                    
            f1 = f1.setMag(mag1);
            f2 = f2.setMag(mag2);

            this.acc = f1.add(f2)
            this.vel.add(this.acc)
            this.vel.x = this.vel.x + this.acc.x
            this.vel.y = this.vel.y + this.acc.y


            this.pos.x = this.pos.x + this.vel.x
            this.pos.y = this.pos.y + this.vel.y


           
            
          
            
             
            
        }
        this.draw = function(r,g,b){
          
           
            if(checkVectors.checked ){
                
            stroke(255,255,255,150)
           
            line(this.pos.x,this.pos.y,this.pos.x+(this.acc.x*1500),this.pos.y + (this.acc.y*1500))

            stroke(255,0,255,150)
           
            line(this.pos.x,this.pos.y,this.pos.x+(this.vel.x*100),this.pos.y + (this.vel.y*100))
            }
            stroke(255,255,255,0)
            
            fill(r,g,b)
           
            ellipse(this.pos.x,this.pos.y,this.d );
            // fill(0,0,0,0)
            // stroke(r,g,b)

            // ellipse(this.pos.x,this.pos.y,50);
            

            this.array.push({x:this.pos.x,y:this.pos.y});

            if(this.array.length>1000){
                this.array.pop();
            }

            for(let i = 0 ; i <= this.array.length; i++){
                // ellipse(this.array[i].x,this.array[i].y,2);
            }
            
        }
    }
}