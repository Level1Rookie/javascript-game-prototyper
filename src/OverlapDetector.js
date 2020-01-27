import Rectangle from './Rectangle';

class OverlapDetector{
    constructor(gameObjectList){
        this.gameObjectList = gameObjectList;
    }
    
    addInteraction(tag1, tag2, interactionFunction){
        
    }

    checkOverlap(){
        let length = this.gameObjectList.length;
        for(let i=0; i < length; i++){
            for(let j=i+1; j<length; j++){
                let gameObject1 = this.gameObjectList.findObjectWithIndex(i);
                let gameObject2 = this.gameObjectList.findObjectWithIndex(j)
                if(this._isOverlap(gameObject1, gameObject2)){
                    this._resolveOverlap(gameObject1, gameObject2);
                }
            }
        }
    }
    _resolveOverlap(gameObject1, gameObject2){
        /*
        registerInteraction(tag1, tag2, function) => [(tag1, tag2) -> interact(g1, g2)]
        _resolveOverlap(gameObject1, gameObject2)

        function _resolveOverlap(gameObject1, gameObject2){
            let func = lookup(gameObject1.tag, gameObject2.tag);
            func(gameObject1, gameObject2)
        }
        
        */
        if(gameObject1.tag == 'player' && gameObject2.tag == 'rect'){
            console.log("Overlap!!");
        }
    }
    _isOverlap(gameObject1, gameObject2){
        if(gameObject1 instanceof Rectangle && gameObject2 instanceof Rectangle){
            let leftRightOverlap = gameObject1.right > gameObject2.left && gameObject1.left < gameObject2.right;
            let topBottomOverlap = gameObject1.top < gameObject2.bottom && gameObject1.bottom > gameObject2.top;
            if (leftRightOverlap && topBottomOverlap){
                return true;
            }
            return false;
        }
        return false;
    }
}

export default OverlapDetector;