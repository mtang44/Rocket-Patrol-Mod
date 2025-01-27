// Michael Tang 
// Rocket Patrol Remix
// time taken: 10 hrs

// total point score: 20

// Modfications: 
// 1: Display the time remaining (in seconds) on the screen (3 points)

// 2: Implemented mouse control for player movement and Left mouse click to fire (5 points)
// (M key to enable/disable mouse controls, mouse moves to player's cursor's x positon. 
// if rocket.x < mouse.x, move rocket right, and if rocket.x > mouse.x, move rocket left

//3: Create a new title screen (3 points)

// 4: create a new scrolling tile sprite for the background (1 point)
// the background is still a space theme, but added more color to represent different stars

// 5: Create a texture atlas, create a new animated sprite for the enemy spaceships (3 points) 

// 6: reate a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5 points) 


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]

}


let game = new Phaser.Game(config)
//reserve keyboard bindings 
let keyFIRE, keyRESET,keyLEFT,keyRIGHT, keyM
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
