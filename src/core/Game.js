import GameObjectList from './GameObjectList';
import Renderer from './Renderer';
import OverlapDetector from './OverlapDetector';

class Game{
    constructor(renderConfig, overlapConfig){
        this.gameObjectList = new GameObjectList();
        this.renderer = new Renderer(document.getElementById('canvas').getContext('2d'), this.gameObjectList, renderConfig);
        this.overlapDetector = new OverlapDetector(this.gameObjectList, overlapConfig);
    }
    add(gameObject){
        this.gameObjectList.add(gameObject);
    }
    addAll(gameObjects){
        for(let gameObject of gameObjects){
            this.gameObjectList.add(gameObject);
        }
    }
    remove(gameObject){
        this.gameObjectList.remove(gameObject);
    }
    update(timestamp){
        for(let gameObject of this.gameObjectList){
            gameObject.update(timestamp);
        }
        this.overlapDetector.checkOverlap();
    }
    render(){
        this.renderer.render();
    }
}

export default Game;