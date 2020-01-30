import Rectangle from './Rectangle';
class Pair{
    constructor(gameObject1, gameObject2){
        this.gameObject1 = gameObject1;
        this.gameObject2 = gameObject2;
    }
    matchTag(tag1, tag2){
        if(this.gameObject1.tag==tag1 && this.gameObject2.tag == tag2){
           return true;
        }
        if(this.gameObject2.tag==tag1 && this.gameObject1.tag == tag2){
            return true;
        }
        return false;
    }
    findObjectWithTag(tag){
        if(this.gameObject1.tag==tag && this.gameObject2.tag==tag){
            return [this.gameObject1, this.gameObject2]
        }
        if(this.gameObject1.tag==tag){
            return this.gameObject1;
        }
        if(this.gameObject2.tag==tag){
            return this.gameObject2;
        }
        return null;
    }
}

class OverlapDetector{
    constructor(gameObjectList){
        this.gameObjectList = gameObjectList;
    }

    checkOverlap(){
        for(let i=0; i<this.gameObjectList.children.length; i++){
            for(let j=i+1; j<this.gameObjectList.children.length; j++){
                let gameObject1 = this.gameObjectList.children[i];
                let gameObject2 = this.gameObjectList.children[j];
                if(this._isOverlap(gameObject1, gameObject2)){
                    this._resolveOverlap(gameObject1, gameObject2);
                }
            }
        }
    }

    _resolveOverlap(gameObject1, gameObject2){
        let pair = new Pair(gameObject1, gameObject2);
        if(pair.matchTag('player','tagger')){
            this.gameObjectList.remove(pair.findObjectWithTag('player'));
        }
        else if(pair.matchTag('background', 'player')){

        }
        else if(pair.matchTag('background','obstacle')){

        }
        else if(pair.matchTag('player','bullet')){
            this.gameObjectList.remove(pair.findObjectWithTag('player'));
            this.gameObjectList.remove(pair.findObjectWithTag('bullet'));
        }
        else if(pair.matchTag('player','pickup')){
            let pickup = pair.findObjectWithTag('pickup');
            this.gameObjectList.findObjectWithTag('pickupManager').destroyPickup(pickup);
            pair.findObjectWithTag('player').setState('tagger');
        }
        else if(pair.matchTag('player','obstacle') || pair.matchTag('tagger','obstacle')){
            gameObject1.position.x = gameObject1.lastPosition.x;
            gameObject1.position.y = gameObject1.lastPosition.y;
            gameObject2.position.x = gameObject2.lastPosition.x;
            gameObject2.position.y = gameObject2.lastPosition.y;

        }else if(pair.matchTag('bullet','obstacle')){
            this.gameObjectList.remove(pair.findObjectWithTag('bullet'));
        }
    }
    _isOverlap(gameObject1, gameObject2){
        let leftRightOverlap = gameObject1.right > gameObject2.left && gameObject1.left < gameObject2.right;
        let topBottomOverlap = gameObject1.top < gameObject2.bottom && gameObject1.bottom > gameObject2.top;
        if (leftRightOverlap && topBottomOverlap){
            return true;
        }
    }
}

export default OverlapDetector;