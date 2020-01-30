import Vector from './core/Vector';
import Rectangle from './core/Rectangle';

class Bullet extends Rectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 5, 5, 'red', 'bullet');
        this.velocity = new Vector(0, 0);
        this.owner = null;
        this.initTime = null;
    }
    setVelocity(x,y){
        this.velocity.x = x;
        this.velocity.y = y;
    }
    setOwner(gameObject){
        this.owner = gameObject;
    }
    update(timestamp){
        let seconds = (timestamp/2000).toFixed(2)
        this.position.add(this.velocity);
        if(this.initTime == null){
            this.initTime = seconds;
        }
        if(seconds - this.initTime > 3){
            let object = this.parent.findObjectWithTag('bullet');
            this.parent.remove(object);
        }
    }
    
}

export default Bullet;