import GameObject from '../core/GameObject';
import DynamicRectangle from '../core/DynamicRectangle';

export class FallingObstacle extends DynamicRectangle{
    constructor(positionX, positionY, color){
        super(positionX, positionY, 10, 10, color, 'enemy');
        this.speed = 2;
        this.setVelocityY(this.speed);
        this.spawnTime = null;
    }
    update(timestamp){
        if(this.spawnTime == null){
            this.spawnTime = timestamp;
        }
        super.update();
    }
}

export class EnemySpawner extends GameObject{
    constructor(){
        this.enemyAliveTime = 5;
        this.currentEnemies = [];
    }
    update(timestamp){
        super.update();
        for(let enemy in this.currentEnemies){
            if(timestamp - enemy.spawnTime > this.enemyAliveTime){
                
            }
        }
    }
    spawnEnemy(){

    }
    destroy(enemyToDestroy){
        let index = this.currentEnemies.findIndex(enemy => enemy.id == enemyToDestroy.id);
        this.currentEnemies.splice(index, 1);
        this.parent.remove(enemyToDestroy);
    }
}

