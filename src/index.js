
import Game from './Game';
import InputHandler from './InputHandler';
import Rectangle from './Rectangle';
import Player from './Player';

let renderConfig = {
    0:['background'],
    1:['obstacle'],
    2:['rect', 'pickup'],
    3:['player', 'bullet'],
    4:[]
}
const game = new Game(document, renderConfig);
let inputhandler = new InputHandler(document);
let rect1 = new Rectangle(20,20,50,50,'green','rect');
let rect2 = new Rectangle(100,100,50,50,'green','rect');
let background = new Rectangle(0,0,400,400,'black','background');
let player = new Player(50,50);
inputhandler.register(player, 'keydown', 'KeyW', function(){player.moveUp()});
inputhandler.register(player, 'keydown', 'KeyS', function(){player.moveDown()});
inputhandler.register(player, 'keydown', 'KeyA', function(){player.moveLeft()});
inputhandler.register(player, 'keydown', 'KeyD', function(){player.moveRight()});
inputhandler.register(player, 'keyup', 'KeyW', function(){player.setVelocityY(0)});
inputhandler.register(player, 'keyup', 'KeyS', function(){player.setVelocityY(0)});
inputhandler.register(player, 'keyup', 'KeyA', function(){player.setVelocityX(0)});
inputhandler.register(player, 'keyup', 'KeyD', function(){player.setVelocityX(0)});
inputhandler.register(player, 'keypress', 'KeyL', function(){player.shoot()});
game.add(player);
game.add(rect1);
game.add(rect2);
game.add(background);

function start(){
    function frame(timestamp){
        game.update(timestamp);
        game.render();
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}
start();

