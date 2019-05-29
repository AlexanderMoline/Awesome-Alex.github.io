var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                { type: 'sawblade', x: 400, y: groundY },
                { type: 'sawblade', x: 900, y: groundY },
                { type: 'sawblade', x: 1000, y: groundY },
                { type: 'sawblade', x: 1500, y: groundY },
                    
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE


        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            createSawBlade(gameItem.x, gameItem.y);
        }


        function createSawBlade(inputX, inputY) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);

            myObstacle.x = inputX;
            myObstacle.y = inputY;

            game.addGameItem(myObstacle);

            var obstacleImage = draw.bitmap('img/pacman.png');
            myObstacle.addChild(obstacleImage);

            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

        // Alex don't move this function from here. I got it working! :) 

        function createBox(x, y) {
            var hitZoneSize = 30;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;

            game.addGameItem(myObstacle);

            var obstacleImage = draw.bitmap('img/blinky.png');
            
            myObstacle.addChild(obstacleImage);

            obstacleImage.x = -25;
            obstacleImage.y = -22;

        }
        
        createBox(100, groundY - 15);
        createBox(500, groundY - 15);
        createBox(1000, groundY - 15);
        createBox(1500, groundY - 15);
        createBox(2000, groundY - 15);
        createBox(2500, groundY - 15);
        createBox(3000, groundY - 15);
        createBox(3500, groundY - 15);
        createBox(4000, groundY - 15);
        createBox(4500, groundY - 15);
            
        
        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy', 25);
            var myEnemy = draw.bitmap('img/inky.png');
            myEnemy.x = -25;
            myEnemy.y = -25;
            
            enemy.addChild(myEnemy);
            
            enemy.x = x;
            enemy.y = y;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = -2;
            
            enemy.onPlayerCollision = function(){
              game.changeIntegrity(-10); 
              enemy.fadeOut();
            };
            enemy.onProjectileCollision = function(){
              game.increaseScore(200);
              enemy.fadeOut();
            };
            
        }
        
        function createReward(x, y){
            var reward = game.createGameItem('reward', 25);
            var myReward = draw.bitmap('img/strawberry-reward.png');
            myReward.x = -25;
            myReward.y = -25;
            
            reward.addChild(myReward);
            
            reward.x = x;
            reward.y = y;
            
            game.addGameItem(reward);
            
            reward.velocityX = -1;
            reward.rotationalVelocity = 0.5;
            
            reward.onPlayerCollision = function(){
              game.changeIntegrity(20); 
              reward.fadeOut();
              game.increaseScore(500);
            };
            
        }
        createReward(400, groundY - 100);
        createReward(800, groundY - 100);
        createReward(1200, groundY - 100);
        createReward(2200, groundY - 100);
        createReward(4200, groundY - 100);
        createReward(5200, groundY - 100);
        createReward(7200, groundY - 100);
        
        createEnemy(900, groundY - 50);
        createEnemy(1600, groundY - 50);
        createEnemy(2000, groundY - 50);
        createEnemy(2500, groundY - 50);
        createEnemy(3000, groundY - 50);
        createEnemy(3445, groundY - 50);
        createEnemy(4670, groundY - 50);
        createEnemy(6000, groundY - 50);
        createEnemy(7500, groundY - 50);
    }
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}