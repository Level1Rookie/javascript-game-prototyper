class Renderer{
    constructor(context, gameObjectList, renderConfig){
        this.context = context;
        this.gameObjectList = gameObjectList;
        this.renderConfig = renderConfig;
        this.renderList = null;

    }
    refreshRenderList(){
        this.renderList = [];
        for(let layer in this.renderConfig){
            for(let gameObject of this.gameObjectList){
                if(this.renderConfig[layer].includes(gameObject.tag)){
                    this.renderList.push(gameObject);
                }
            }
        }
        this.gameObjectList.isChanged = false;
    }
    render(){
        if(this.gameObjectList.isChanged || this.renderList == null){
            this.refreshRenderList();
        }
        for(let gameObject of this.renderList){
            this.context.fillStyle = gameObject.color;
            this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.x, gameObject.size.y);
        }
    }
}

export default Renderer;