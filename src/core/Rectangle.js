import GameObject from './GameObject';
import Vector from './Vector';

class Rectangle extends GameObject{
    constructor(positionX, positionY, sizeX, sizeY, color, tag){
        super(tag);
        this.color = color;
        this.lastPosition = new Vector(positionX,positionY);
        this.position = new Vector(positionX,positionY);
        this.size = new Vector(sizeX,sizeY);
    }
    get left(){
        return this.position.x;
    }
    get right(){
        return this.position.x + this.size.x;
    }
    get top(){
        return this.position.y;
    }
    get bottom(){
        return this.position.y + this.size.y;
    }
    update(){
    }
}

export default Rectangle;