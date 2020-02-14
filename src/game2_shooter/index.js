import Game from '../core/Game';
import Rectangle from '../core/Rectangle';
import FallingEnemy from './FallingEnemy';
import Player from './Player';
import InputHandler from '../core/InputHandler';
import Bullet from './Bullet';


const renderConfig = {
    0:['background'],
    1:['obstacle'],
    2:['player','enemy'],
    3:['bullet']
}
const overlapConfig = [
    {
        tag1: 'enemy',
        tag2: 'player',
        action: (tag1, tag2, gameObjectList)=>{
            gameObjectList.remove(tag2);
        }
    },
    {
        tag1: 'player',
        tag2: 'obstacle',
        action: (tag1, tag2, gameObjectList) => {
            tag1.position.x = tag1.lastPosition.x;
            tag1.position.y = tag1.lastPosition.y;
        }
    },
]
const game = new Game(renderConfig, overlapConfig);
let background = new Rectangle(0,0,500,500,'white','background');
let wall1 = new Rectangle(0,0,400,10,'green','obstacle');
let wall2 = new Rectangle(0,0,10,400,'green','obstacle');
let wall3 = new Rectangle(390,0,10,400,'green','obstacle');
let wall4 = new Rectangle(0,390,400,10,'green','obstacle');
let walls = [wall1, wall2, wall3, wall4]
let inputHandler = new InputHandler();
let enemy = new FallingEnemy(50,50,'green');
let player = new Player(50,360, {
    'left': 'ArrowLeft',
    'right': 'ArrowRight'
});
inputHandler.subscribeBy(player, "keyboard");
game.addAll([background, player, enemy]);
game.addAll(walls);

function start(){
    function frame(timestamp){
        game.update(timestamp);
        game.render();
        //game.gameObjectList.print();
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
start();

