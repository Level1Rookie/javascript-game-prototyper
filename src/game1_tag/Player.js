import DynamicRectangle from '../core/DynamicRectangle';
import Bullet from './Bullet';
import Vector from '../core/Vector';

class Player extends DynamicRectangle{
    constructor(positionX, positionY, control){
        super(positionX, positionY, 10, 10,'green', 'player');
        this.control = control;
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
    notify(event){
        let up = this.control['up'];
        let down = this.control['down'];
        let right = this.control['right'];
        let left = this.control['left'];
        let ability = this.control['ability'];
        if(event.type == 'keydown'){
            if(event.code == up){
                this.moveUp();
            }else if(event.code == down){
                this.moveDown();
            }else if(event.code == left){
                this.moveLeft();
            }else if(event.code == right){
                this.moveRight();
            }else if(event.code == ability){
                this.doAbility();
            }
        }
        else if(event.type == 'keyup'){
            if(event.code == up){
                this.setVelocityY(0);
            }else if(event.code == down){
                this.setVelocityY(0);
            }else if(event.code == left){
                this.setVelocityX(0);
            }else if(event.code == right){
                this.setVelocityX(0);
            }
        }
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
        super.update();
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