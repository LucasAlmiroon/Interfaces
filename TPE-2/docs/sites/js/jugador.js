class Jugador {


    constructor(name, colorF,turno,ganador,sety,setx){
        this.name = name;
        this.colorF = colorF;
        this.turno = turno;
        this.ganador = ganador;
        this.fichas = new Array();
        this.sety = sety;
        this.setx = setx;

    }
    
    generarFichas(ctx){

        let image = new Image();

        image.src = "./sites/img/"+ this.colorF + ".png";
        for(let i = 0; i < MAXFICHAS; i ++){
            let ficha = new Ficha(((Math.random()*100)+this.setx),((Math.random()*400)+this.sety),ctx,32,image);
            this.fichas.push(ficha);
        }
    }

    setTurno(){
        if(this.turno){
            this.turno = false;
        }else{
            this.turno = true;
        }
    }
}