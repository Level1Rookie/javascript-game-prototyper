import DynamicRectangle from '../core/DynamicRectangle';

class Bullet extends DynamicRectangle{
    constructor(positionX, positionY, color){
        super(positionX, positionY, 10, 10, color, 'bullet');
        this.speed = -3;
        this.setVelocityY(this.speed);
    }
    update(){
        super.update();
    }
}

export default Bullet;