
import Game from './core/Game';
import InputHandler from './core/InputHandler';
import Rectangle from './core/Rectangle';
import Player from './Player';
import PickupManager from './PickupManager';

let renderConfig = {
    0:['background'],
    1:['obstacle'],
    2:['rectangle', 'pickup'],
    3:['player','tagger', 'bullet'],
    4:[]
}
const game = new Game(document, renderConfig);
let inputhandler = new InputHandler();
let background = new Rectangle(0,0,400,400,'black','background');
let wall1 = new Rectangle(0,0,400,10,'green','obstacle');
let wall2 = new Rectangle(0,0,10,400,'green','obstacle');
let wall3 = new Rectangle(390,0,10,400,'green','obstacle');
let wall4 = new Rectangle(0,390,400,10,'green','obstacle');
let setup = [background, wall1, wall2, wall3, wall4];
let player1 = new Player(50,50, {
    'up': 'KeyW',
    'down': 'KeyS',
    'left': 'KeyA',
    'right': 'KeyD',
    'shoot': 'Space'
});
let player2 = new Player(100,100,{
    'up': 'ArrowUp',
    'down': 'ArrowDown',
    'left': 'ArrowLeft',
    'right': 'ArrowRight',
    'shoot':'Numpad0'
});
let pickupManager = new PickupManager();
inputhandler.subscribe(player1);
inputhandler.subscribe(player2);
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