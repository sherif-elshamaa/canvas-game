class Gem{
    static gems = ["Gem Blue.png", "Gem Green.png", "Gem Orange.png"];
    constructor(x,y){
        let index = parseInt(Math.random() * Gem.gems.length);

        this.sprite = 'images/'+ Gem.gems[index];

        this.x = x;
        this.y = y;
    };
    update(){

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