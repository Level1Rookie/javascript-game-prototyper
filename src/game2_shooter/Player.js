import DynamicRectangle from '../core/DynamicRectangle';

class Player extends DynamicRectangle{
    constructor(postitionX, postitionY, control){
        super(postitionX, postitionY, 10,10,"blue","player");
        this.speed = 3;
        this.control = control;
    }
    notify(event){
        if(event.type == 'keydown'){
            if(event.code == this.control.left){
                this.moveLeft();
            }
            else if(event.code == this.control.right){
                this.moveRight();
            }
        }
        if(event.type == 'keyup'){
            if(event.code == this.control.left || event.code == this.control.right){
                this.setVelocityX(0);
            }
        }
    }
    moveLeft(){
        this.velocity.x = -this.speed;
    }
    moveRight(){
        this.velocity.x = this.speed;
    }
    update(){
        super.update();
    }
}

export default Player;