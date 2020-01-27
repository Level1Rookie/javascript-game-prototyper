import GameObjectList from '../GameObjectList';
import GameObject from '../GameObject';

function test(){
    let gameObjectList = new GameObjectList();
    let gameObject1 = new GameObject();
    gameObjectList.add(gameObject1);
    gameObjectList.print();
    gameObjectList.remove(gameObject1);
    gameObjectList.print();
}

export default test;

