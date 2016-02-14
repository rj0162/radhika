// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    if (this.x > 505) {
    this.reset();
}
};
Enemy.prototype.reset=function(){
    this.x=-200;
    this.speed=350;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var enemy1 = new Enemy(0,60, 400);
var enemy2 = new Enemy(101,150, 400);
var enemy3 = new Enemy(202,235,700);
var enemy4 = new Enemy(0,60, 600);
var enemy5 = new Enemy(101,150, 200);
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y,speed){
	this.x=x;
	this.y=y;
	this.sprite = 'images/char-boy.png';
};
Player.prototype.update=function(dt){
	//this.handleInput();
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.render=function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(direction){
if(direction === 'left' && this.x > 25){
this.x -=100;
}
if(direction === 'up' && this.y > 0){
this.y -= 82.5;
}
if(direction === 'right' && this.x < 400){
this.x += 100;
}
if(direction === 'down' && this.y < 400){
this.y +=82.5;
}
}


var player1 = new Player(200,405);


var player = player1;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
