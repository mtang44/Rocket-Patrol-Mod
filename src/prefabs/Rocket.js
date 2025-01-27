//Rocket Prefab 
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y, texture, frame){
        super(scene,x, y, texture, frame)

        // add object to existing scene 
        scene.add.existing(this)
        this.isFiring = false
        this.moveSpeed = 4
        this.sfxShot = scene.sound.add('sfx-shot')
        this.mouseActive = true
        game.input.mouse.capture = true
    }
    update(){
         // disable mouse movement using right click
         if(Phaser.Input.Keyboard.JustDown(keyM))
            {
                this.mouseActive = !this.mouseActive
                console.log("mouse is active: ",this.mouseActive)
            }
        //left right movement
        if(!this.isFiring){
            if((keyLEFT.isDown && this.x >= borderUISize + this.width) || (game.input.mousePointer.x < this.x) && this.mouseActive){
                this.x -= this.moveSpeed
            }
            else if((keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) || (game.input.mousePointer.x > this.x) && this.mouseActive)
            {
                this.x += this.moveSpeed
            }

        }
       
        //fire button
        if((Phaser.Input.Keyboard.JustDown(keyFIRE)&&!this.isFiring) || (game.input.activePointer.leftButtonDown()) && this.mouseActive){
            this.isFiring = true
            this.sfxShot.play()
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed
           

        }//reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false
            this.y = game.config.height - borderUISize -borderPadding
        }


    }
    //reset rocket to ground
    reset(){
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }






}