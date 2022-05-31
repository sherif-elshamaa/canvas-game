class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.nOfLives = 5;
        this.score = 0
        this.startOver();
        this.level = 1;
        this.highestScore = 0;
        this.heart = 1;
    };
    
    startOver(){
        this.x = 200;
        this.y = 400;
    }
    update() {
        
    };
    render() {
        
       

        ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
    };
    handleInput(direction){
        
        if(player.level % 3 === 0 ){
            if(heart.length === 0 ){
                generateHeart();
                
                
               
            };
        };
        if(allgems.length === 0){
            player.level++;
            generateGem();
            
        };
        if(player.level % 3 === 0){
            if(heart.length === 0 ){
                generateHeart();
                
               
            };
        };
        if(this.nOfLives< 1 ){
            if(direction=='space'){
                this.nOfLives = 5;
                generateGem();
                this.startOver();
                this.heart = 1;
                if(this.score > this.highestScore){
                    this.highestScore = this.score;};
                    this.score = 0;
                    this.level = 1;
                    
                }else{
                    return;
                };
        };
        switch(direction){
            case 'up':
                if(this.y>0){
                    this.y -= 90;
                };
                break;
            case 'down':
                if(this.y<390){
                    this.y += 90;
                };
                break;
            case 'left':
                if(this.x>0){
                    this.x -= 100;
                };
                break;
            case 'right':
                if(this.x < 400){
                    this.x += 100;
                }; 
                break;
        };
    }
    collision() {
        this.startOver();
        this.nOfLives--;
    };
    scoreCollision(){
        this.score += 150;
    };

    
};
