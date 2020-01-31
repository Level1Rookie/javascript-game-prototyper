
import Game from './core/Game';
import InputHandler from './core/InputHandler';
import Rectangle from './core/Rectangle';
import Player from './Player';
import PickupManager from './PickupManager';
import Vector from './core/Vector';

let renderConfig = {
    0:['background'],
    1:['obstacle'],
    2:['rectangle', 'pickup'],
    3:['player','tagger', 'bullet'],
    4:[]
}
const overlapConfig = [
    {
        tag1: 'player',
        tag2: 'pickup',
        action: (player, pickup, gameObjectList) => {
            player.setState('tagger');
            player.setAbilityType(pickup.type);
            if(pickup.type == 'shoot'){
                player.speed = 0.5;
            }
            gameObjectList.findObjectWithTag('pickupManager').destroy(pickup);
        }
    },
    {
        tag1: 'player',
        tag2: 'obstacle',
        action: (player, obstacle, gameObjectList) => {
            player.position.x = player.lastPosition.x;
            player.position.y = player.lastPosition.y;
        }
    },
    {
        tag1: 'tagger',
        tag2: 'obstacle',
        action: (player, obstacle, gameObjectList) => {
            player.position.x = player.lastPosition.x;
            player.position.y = player.lastPosition.y;
        }
    },
    {
        tag1: 'player',
        tag2: 'tagger',
        action: (player, tagger, gameObjectList) => {
            gameObjectList.remove(player);
        }
    },
    {
        tag1: 'player',
        tag2: 'bullet',
        action: (player, bullet, gameObjectList) => {
            if(bullet.owner != player){
                gameObjectList.remove(player);
            }
        }
    },
    
]

const game = new Game(renderConfig, overlapConfig);
let inputhandler = new InputHandler();
let background = new Rectangle(0,0,400,400,'white','background');
let wall1 = new Rectangle(0,0,400,10,'green','obstacle');
let wall2 = new Rectangle(0,0,10,400,'green','obstacle');
let wall3 = new Rectangle(390,0,10,400,'green','obstacle');
let wall4 = new Rectangle(0,390,400,10,'green','obstacle');

let wall5 = new Rectangle(50,50,10,100,'green','obstacle');
let wall6 = new Rectangle(50,250,10,100,'green','obstacle');

let wall7 = new Rectangle(150,50,10,100,'green','obstacle');
let wall8 = new Rectangle(150,250,10,100,'green','obstacle');

let wall9 = new Rectangle(250,50,10,100,'green','obstacle');
let wall10 = new Rectangle(250,250,10,100,'green','obstacle');

let wall11 = new Rectangle(350,50,10,100,'green','obstacle');
let wall12 = new Rectangle(350,250,10,100,'green','obstacle');

let setup = [background, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12];
let player1 = new Player(20,20, {
    'up': 'KeyW',
    'down': 'KeyS',
    'left': 'KeyA',
    'right': 'KeyD',
    'ability': 'Space'
});
let player2 = new Player(380,380,{
    'up': 'ArrowUp',
    'down': 'ArrowDown',
    'left': 'ArrowLeft',
    'right': 'ArrowRight',
    'ability':'Numpad0'
});
let pickupManager = new PickupManager();
inputhandler.bind(player1);
inputhandler.bind(player2);
game.add(pickupManager);
game.addAll(setup);
game.add(player1);
game.add(player2);
function start(){
    function frame(timestamp){
        game.update(timestamp);
        game.render();
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
start();