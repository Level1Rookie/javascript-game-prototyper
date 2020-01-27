import Rectangle from './Rectangle';
import Bullet from './Bullet';
import Vector from './Vector';

class Player extends Rectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 10, 10,'blue', 'player');
        this.velocity = new Vector(0,0);
        this.speed = 3;
    }
    moveUp(){
        this.velocity.y = -this.speed;
    }
    moveDown(){
        this.velocity.y = this.speed;
    }
    moveLeft(){
        this.velocity.x = -this.speed;
    }
    moveRight(){
        this.velocity.x = this.speed;
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
    shoot(){
        let bullet = new Bullet(this.position.x, this.position.y);
        bullet.setVelocity(this.velocity.x, this.velocity.y);
        bullet.setOwner(this);
        this.parent.add(bullet);
    }
    update(){
        this.position.add(this.velocity);
    }
}

export default Player;