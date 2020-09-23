class Ficha extends Juego {

    constructor(nombre,posX,posY){
        super();
        this.nombre = nombre;
        this.posX = posX;
        this.posY = posY;

    }

    draw(){
    
        let ctx = document.querySelector("canvas").getContext("2d");
        let image = new Image();

        let posX = this.posX
        let posY = this.posY

        image.src = "./sites/img/"+ this.nombre + ".png";

        image.id = this.nombre;

        image.onload = function (){
            ctx.drawImage(image,posX,posY);

        }
    }
}