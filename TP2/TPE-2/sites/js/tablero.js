class Tablero extends Juego{

    constructor (posX,posY){
        super();
        this.posX = posX;
        this.posY = posY;
    }

    draw(){
        super.draw();

        let ctx = document.querySelector("canvas").getContext("2d");
        let image = new Image();

        let posX = this.posX
        let posY = this.posY

        image.src = "./sites/img/tablero.png";

        image.id = "tablero";

        image.onload = function (){
            ctx.drawImage(image,posX,posY);

        }
    }
}