class Tablero{

    constructor (posX,posY,ctx,image){
        this.posX = posX;
        this.posY = posY;
        this.image = image;
        this.ctx = ctx;
        this.matriz = matriz;
    }

    


    draw(){
            this.ctx.drawImage(this.image,this.posX,this.posY);
    }
}