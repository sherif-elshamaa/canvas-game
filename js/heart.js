class Heart {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sprite = 'images/Heart.png';
    };
    render(){

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(0.5,0.5);
        ctx.drawImage(Resources.get(this.sprite),55,90);
        
        
        /* ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(105,200,70,0,2*Math.PI);
        ctx.fill(); */
        ctx.restore();
    };
};