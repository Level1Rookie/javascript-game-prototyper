import Rectangle from './core/Rectangle';
import Bullet from './Bullet';
import Vector from './core/Vector';

class Player extends Rectangle{
    constructor(positionX, positionY, playerConfig){
        super(positionX, positionY, 10, 10,'green', 'player');
        this.velocity = new Vector(0,0);
        this.playerConfig = playerConfig;
        this.abilityType = null;
        this.taggerStartTime = null;
        this.taggerDuration = 4000;
        this.speed = 3;
    }
    setState(state){
        if(state == 'tagger'){
            this.setTag('tagger');
            this.color = 'red';
        }else if(state=='player'){
            this.setTag('player');
            this.color = 'green';
            this.speed = 3;
            this.abilityType = null;
        }
    }
    setAbilityType(abilityType){
        this.abilityType = abilityType;
    }
    subscribe(addEventListener){
        let up = this.playerConfig['up'];
        let down = this.playerConfig['down'];
        let right = this.playerConfig['right'];
        let left = this.playerConfig['left'];
        let ability = this.playerConfig['ability'];
        addEventListener('keydown', up, () => this.moveUp());
        addEventListener('keydown', down, () => this.moveDown());
        addEventListener('keydown', left, () => this.moveLeft());
        addEventListener('keydown', right, () => this.moveRight());
        addEventListener('keyup', up, () => this.setVelocityY(0));
        addEventListener('keyup', down, () => this.setVelocityY(0));
        addEventListener('keyup', left, () => this.setVelocityX(0));
        addEventListener('keyup', right, () => this.setVelocityX(0));
        addEventListener('keydown', ability, () => this.doAbility());
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
    doAbility(){
        if(this.abilityType == 'black-hole'){
            let player = this.parent.findObjectWithTag('player');
            if(player != null){
                let direction = new Vector(this.position.x - player.position.x , this.position.y - player.position.y).normalized();
                player.setVelocity(direction.x, direction.y);
            }
        }
        else if(this.abilityType == 'shoot'){
            let bullet = new Bullet(this.position.x, this.position.y);
            let direction = this.velocity.normalized();
            let max = 1.2;
            let min = 0.4;
            let xRandom = Math.random() * (max - min) + min;
            let yRandom = Math.random() * (max - min) + min;
            bullet.setVelocity(direction.x * bullet.speed * xRandom, direction.y * bullet.speed * yRandom);
            bullet.setOwner(this);
            this.parent.add(bullet);
        }
    }
    update(timestamp){
        this.lastPosition.x = this.position.x;
        this.lastPosition.y = this.position.y;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(this.tag == 'tagger'){
            if(this.taggerStartTime==null){
                this.taggerStartTime = timestamp;
            }
            if(timestamp - this.taggerStartTime > this.taggerDuration){
                this.setState('player');
                this.taggerStartTime = null;
            }

        }
    }
}

export default Player;