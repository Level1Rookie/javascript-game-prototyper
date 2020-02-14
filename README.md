# javascript-game-prototyper
webpack setup

1.  npm init -y
2.  npm install --save-dev webpack webpack-dev-server webpack-cli
3.  npx webpack to bundle into main.js

project structure
    project
        /dist
            /index.html
        /src
            /index.js
        package.json
        webpack.config.js



Getting Started
    const renderConfig = {
        0:['background'],
        1:['pickup','player']
    }
    const overlapConfig = [
        {
            tag1: 'pickup',
            tag2: 'player',
            action: (tag1, tag2, gameObjectList)=>{
                gameObjectList.remove(pickup);
            }
        }
    ]
    const game = new Game(renderConfig, overlapConfig);
    const background = new Rectangle(0,0,500,500,'white','background');
    const pickup = new Rectangle(100,100,10,10,'green','pickup');
    game.add(background);
    game.add(pickup);


    Class Hiearchy

    GameObject
        Rectangle
            DynamicRectangle

