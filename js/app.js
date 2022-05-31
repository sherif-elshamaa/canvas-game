let allEnemies = [];
let player = new Player();

let score = new Score();

let allgems = [];

let heart = [];

function generateHeart(){
    if((player.heart/player.level) === 0.3333333333333333){
        player.heart++;
        const heartPositionx = [0,100,200,300,400];
        const heartPositiony = [72,155,240];
        const randomx = heartPositionx[Math.floor(Math.random() * heartPositionx.length)];
        const randomy = heartPositiony[Math.floor(Math.random() * heartPositiony.length)];
        heart.push(new Heart(randomx, randomy));
    }else{
        return;
    };

};





function generateGem(){
    const gemPosition = [0,100,200,300,400];
    var y = [72,155,240];
    for(i=0;i < y.length ;i++){
        const randomPosition = gemPosition[Math.floor(Math.random() * gemPosition.length)];
        allgems.push(new Gem(randomPosition,y[i]));
    };
};
generateGem();



enemy1 = new Enemy(100,55);
enemy2 = new Enemy(100,135);
enemy3 = new Enemy(100,215);
allEnemies.push(enemy1, enemy2, enemy3)

function checkCollisions(){
    if(player.nOfLives < 1){return;}

    allEnemies.forEach(function(enemy) {
        if(Math.abs(enemy.x - player.x) < 50 && Math.abs(enemy.y - player.y) < 50){
            player.collision();
        };
    })

    allgems.forEach(function(gem,index) {
        if(Math.abs(gem.x - player.x) < 50 && Math.abs(gem.y - player.y) < 50){
            player.scoreCollision();
            allgems.splice(index, 1);
        }
    })
    heart.forEach(function(Heart,index) {
        if(Math.abs(Heart.x - player.x) < 50 && Math.abs(Heart.y - player.y) < 50){
            player.nOfLives++;
            heart.splice(index, 1);
        };
    })
};




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
