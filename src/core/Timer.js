import GameObject from '../core/GameObject';

class Timer extends GameObject{
    constructor(countDown){
        super('timer');
        this.startTime = null;
        this.dueTime = null;
        this.countDown = countDown;

        this.isTimeup = false;
    }
    timeUp(){
        return this.isTimeup;
    }
    reset(){
        this.startTime = null;
        this.dueTime = null;
    }
    update(timestamp){
        if(this.startTime == null){
            this.startTime = timestamp;
            this.dueTime = this.startTime + this.countDown;
        }
        if(timestamp < this.dueTime){
            this.isTimeup = true;
        }
    }
}

export default Timer;