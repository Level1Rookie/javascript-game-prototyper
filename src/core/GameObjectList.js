class GameObjectList{
    constructor(){
        this.isChanged = false;
        this.children = []
        this.idPool = new Set();
    }
    add(gameObject){
        let id = this._generateId();
        gameObject._setId(id);
        gameObject.setParent(this);
        this.children.push(gameObject);
        this.isChanged = true;
    }
    remove(gameObjectToRemove){
        let index = this.children.findIndex(gameObj => gameObj.id == gameObjectToRemove.id);
        this.idPool.delete(this.children[index].id);
        this.children.splice(index, 1);
        this.isChanged = true;
    }
    get length(){
        return this.children.length;
    }
    findObjectWithIndex(index){
        return this.children[index];
    }
    findObjectWithTag(tag){
        let index = this.children.findIndex(gameObj => gameObj.tag == tag);
        return this.children[index];
    }
    findObjectWithId(id){
        let index = this.children.findIndex(gameObj => gameObj.id == id);
        return this.children[index];
    }

    //javascript is unable to console.log object realtime 
    //so its necessary to have this print function for debugging
    print(){
        let printList = [];
        for(let i=0; i<this.children.length; i++){
            let tempObj = Object.assign({},this.children[i]);
            printList.push(tempObj);
        }
        console.log(printList);
    }

    _generateId(){
        let id = Math.floor(Math.random()*90000) + 10000;
        while(this.idPool.has(id)){
            id = Math.floor(Math.random()*90000) + 10000;
        }
        this.idPool.add(id);
        return id;
    }
}

export default GameObjectList;