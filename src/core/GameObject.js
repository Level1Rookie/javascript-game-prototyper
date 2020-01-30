class GameObject{
    constructor(tag=null){
        this.parent = null;
        this.id = null;
        this.tag = tag;
    }
    _setId(id){
        this.id = id;
    }
    setTag(tag){
        this.tag = tag;
    }
    setParent(parent){
        this.parent = parent;
    }
    update(timestamp){
        //do nothing
    }
}

export default GameObject;