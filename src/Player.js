import Rectangle from './core/Rectangle';
import Bullet from './Bullet';
import Vector from './core/Vector';

class Player extends Rectangle{
    constructor(positionX, positionY, playerConfig){
        super(positionX, positionY, 10, 10,'blue', 'player');
        this.velocity = new Vector(0,0);
        this.playerConfig = playerConfig;
        this.speed = 3;
    }
    setState(state){
        if(state == 'tagger'){
            this.setTag('tagger');
            this.color = 'red';
        }else if(state=='player'){
            this.setTag('player');
            this.color = 'blue';
        }
    }
    bind(register){
        let up = this.playerConfig['up'];
        let down = this.playerConfig['down'];
        let right = this.playerConfig['right'];
        let left = this.playerConfig['left'];
        let shoot = this.playerConfig['shoot'];
        register('keydown', up, () => this.moveUp());
        register('keydown', down, () => this.moveDown());
        register('keydown', left, () => this.moveLeft());
        register('keydown', right, () => this.moveRight());
        register('keyup', up, () => this.setVelocityY(0));
        register('keyup', down, () => this.setVelocityY(0));
        register('keyup', left, () => this.setVelocityX(0));
        register('keyup', right, () => this.setVelocityX(0));
        register('keypress', shoot, () => this.shoot());
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
        this.lastPosition.x = this.position.x;
        this.lastPosition.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

export default Player;