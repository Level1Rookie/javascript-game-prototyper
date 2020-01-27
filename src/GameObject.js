class GameObject{
    constructor(tag){
        this.parent = null;
        this.id = null;
        this.tag = tag;
    }
    _setId(id){
        this.id = id;
    }
    setParent(parent){
        this.parent = parent;
    }
    update(timestamp){
        //do nothing
    }
}

export default GameObject;