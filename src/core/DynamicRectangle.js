import Rectangle from './Rectangle';
import Vector from './Vector';

class DynamicRectangle extends Rectangle{
    constructor(positionX, positionY, sizeX, sizeY, color, tag){
        super(positionX, positionY, sizeX, sizeY, color, tag);
        this.lastPosition = new Vector(positionX,positionY);
        this.velocity = new Vector(0, 0);
    }
    setVelocity(x,y){
        this.velocity.x = x;
        this.velocity.y = y;
    }
    setVelocityX(x){
        this.velocity.x = x;
    }
    setVelocityY(y){
        this.velocity.y = y;
    }

    update(){
        this.lastPosition.x = this.position.x;
        this.lastPosition.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

export default DynamicRectangle;