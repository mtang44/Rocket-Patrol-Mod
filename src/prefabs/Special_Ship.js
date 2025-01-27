class Special_Ship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        super(scene,x,y,texture,frame,pointValue)
        scene.add.existing(this)
        this.points = pointValue
        //this.setScale(.4, .4)
        this.moveSpeed = game.settings.spaceshipSpeed + 3
    }
    update(){
    
        this.x -= this.moveSpeed
        if(this.x <= 0 - this.width){
            this.x = game.config.width
        }
        }
    
    
    
    reset(){
        this.x = game.config.width
    }
}