import GameObject from '../core/GameObject';
import Rectangle from '../core/Rectangle';
import Timer from '../core/Timer';

// ------Tagger pickups-------
//BlackHole pickup
//Frozen pickup
//Chain pickup
//Speed pickup



class BasicPickup extends Rectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 5, 5, 'orange', 'pickup');
        this.type = "basic";
    }
}

class ShootPickup extends Rectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 5, 5, 'red', 'pickup');
        this.type = "shoot";
    }
}

class BlackHolePickup extends Rectangle{
    constructor(positionX, positionY){
        super(positionX, positionY, 5, 5, 'black', 'pickup');
        this.type = "black-hole";
    }
}

class PickupManager extends GameObject{
    constructor(){
        super('pickupManager');

        this.pickupExistTimer = new Timer(3000);
        this.spawnTimer = new Timer(5000);
        this.pickupList = [];
    }
    update(timestamp){
        super.update();
        if(this.spawnTimer.timeUp()){
            this.spawnPickup(timestamp);
            this.spawnTimer.reset();
        }
        for(let pickup of this.pickupList){
            if(this.pickupExistTimer.timeUp()){
                this.destroy(pickup);
                this.pickupExistTimer.reset();
            }
        }
    }
    spawnPickup(spawnTime){
        let choice = Math.floor(Math.random() * 3);
        let x = Math.floor(Math.random()*300);
        let y = Math.floor(Math.random()*300);
        let pickup = null;
        if(choice == 0){
            pickup = new BlackHolePickup(x,y, spawnTime);
        }else if(choice == 1){
            pickup = new ShootPickup(x,y, spawnTime);
        }else{
            pickup = new BasicPickup(x,y, spawnTime);
        }
        this.pickupList.push(pickup);
        this.parent.add(pickup);
        this.lastSpawnTime = spawnTime;
    }
    destroy(pickupToDestroy){
        let index = this.pickupList.findIndex(pickup => pickup.id == pickupToDestroy.id);
        this.pickupList.splice(index, 1);
        this.parent.remove(pickupToDestroy);
    }
}

export default PickupManager;