import GameObject from '../core/GameObject';
import DynamicRectangle from '../core/DynamicRectangle';

export class FallingObstacle extends DynamicRectangle{
    constructor(positionX, positionY, color){
        super(positionX, positionY, 10, 10, color, 'enemy');
        this.speed = 2;
        this.setVelocityY(this.speed);
    }
    update(){
        super.update();
    }
}

export class EnemySpawner extends GameObject{
    constructor(){
        
    }
}

