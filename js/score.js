class Score{
    render() {
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.fillText(`Live(s): ${player.nOfLives}`, 0, 40);
        ctx.fillText(`Score: ${player.score}`, 330, 40);
        ctx.fillText(`level: ${player.level}`, 200, 40);
        ctx.font = "20px Arial";
        ctx.fillText(`Highest score: ${player.highestScore}`, 40, 602);
        if(player.nOfLives<1){
            this.playAgain();
        };
        /* if(allgems.length==0){
            this.playAgainWon();
        } */
    };
    playAgain(){
        ctx.fillStyle ="white";
        ctx.fillText("GameOver, press space to play Again.", 40, 570);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(35,545,440,35)
    };
    playAgainWon(){
        ctx.fillStyle ="white";
        ctx.fillText("You Win, press space to play Again.", 40, 570);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(35,545,440,35)
    }
};
