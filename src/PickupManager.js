import Rectangle from './core/Rectangle';

class Pickup extends Rectangle{
    constructor(positionX, positionY, spawnTime){
        super(positionX, positionY, 5, 5, 'yellow', 'pickup');
        this.spawnTime = spawnTime;
    }
}

class PickupManager extends Rectangle{
    constructor(){
        super(0, 0, 0, 0, 'black', 'pickupManager');
        this.lastSpawnTime = null;
        this.pickupList = [];
    }
    update(timestamp){
        if(this.lastSpawnTime == null){
            this.lastSpawnTime = timestamp;
        }
        if(timestamp - this.lastSpawnTime > 2000){
            this.spawnPickup(timestamp);
        }
        for(let pickup of this.pickupList){
            if(timestamp - pickup.spawnTime > 2000){
                this.destroyPickup(pickup);
            }
        }
        console.log(this.lastSpawnTime);
    }
    spawnPickup(spawnTime){
        let pickup = new Pickup(Math.random()*300, Math.random()*300, spawnTime);
        this.pickupList.push(pickup);
        this.parent.add(pickup);
        this.lastSpawnTime = spawnTime;
    }
    destroyPickup(pickupToDestroy){
        let index = this.pickupList.findIndex(pickup => pickup.id == pickupToDestroy.id);
        this.pickupList.splice(index, 1);
        this.parent.remove(pickupToDestroy);
    }
}

export default PickupManager;