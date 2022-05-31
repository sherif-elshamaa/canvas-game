class Enemy{
    constructor(x,y){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.v = Math.floor(Math.random()*100)+50;


    };
    update(dt){
        this.x += ( dt * this.v * (player.level/2) );
        if(this.x > ctx.canvas.width){
            this.x = -200;
        }
    };
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        
        
        /* ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(this.x+50,this.y+110,40,0,2*Math.PI);
        ctx.fill(); */
    };
};

