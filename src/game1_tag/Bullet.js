import Vector from '../core/Vector';
import DynamicRectangle from '../core/DynamicRectangle';

class Bullet extends DynamicRectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 5, 5, 'green', 'bullet');
        this.owner = null;
        this.initTime = null;
        this.speed = 3;
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