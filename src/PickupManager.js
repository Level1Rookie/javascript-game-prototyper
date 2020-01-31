import Rectangle from './core/Rectangle';

// ------Tagger pickups-------
//BlackHole pickup
//Frozen pickup
//Chain pickup
//Speed pickup



class BasicPickup extends Rectangle{
    constructor(positionX, positionY, spawnTime){
        super(positionX, positionY, 5, 5, 'orange', 'pickup');
        this.type = "basic";
        this.spawnTime = spawnTime;
    }
}

class ShootPickup extends Rectangle{
    constructor(positionX, positionY, spawnTime){
        super(positionX, positionY, 5, 5, 'red', 'pickup');
        this.type = "shoot";
        this.spawnTime = spawnTime;
    }
}

class BlackHolePickup extends Rectangle{
    constructor(positionX, positionY, spawnTime){
        super(positionX, positionY, 5, 5, 'black', 'pickup');
        this.type = "black-hole";
        this.spawnTime = spawnTime;
    }
}

class PickupManager extends Rectangle{
    constructor(){
        super(0, 0, 0, 0, 'black', 'pickupManager');
        this.existDuration = 3000;
        this.spawnTimeDuration = 5000;
        this.lastSpawnTime = null;
        this.pickupList = [];
    }
    update(timestamp){
        if(this.lastSpawnTime == null){
            this.lastSpawnTime = timestamp;
        }
        if(timestamp - this.lastSpawnTime > this.spawnTimeDuration){
            this.spawnPickup(timestamp);
        }
        for(let pickup of this.pickupList){
            if(timestamp - pickup.spawnTime > this.existDuration){
                this.destroy(pickup);
            }
        }
    }
    spawnPickup(spawnTime){
        let choice = Math.floor(Math.random() * 3);
        let x = Math.floor(Math.random()*300);
        let y = Math.floor(Math.random()*300);
        console.log(choice);
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