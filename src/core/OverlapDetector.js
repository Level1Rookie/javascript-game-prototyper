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
    constructor(gameObjectList, overlapConfig){
        this.gameObjectList = gameObjectList;
        this.overlapConfig = this._parseOverlapConfig(overlapConfig);
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

    _parseOverlapConfig(overlapConfig){
        return overlapConfig;
    }

    _resolveOverlap(gameObject1, gameObject2){
        let pair = new Pair(gameObject1, gameObject2);

        for(let config of this.overlapConfig){
            if(pair.matchTag(config.tag1,config.tag2)){
                config.action(pair.findObjectWithTag(config.tag1),pair.findObjectWithTag(config.tag2), this.gameObjectList);
            }
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