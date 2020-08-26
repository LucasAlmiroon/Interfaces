document.addEventListener ("DOMContentLoaded", function(){
    const cols = 10;
    const row = 10;

    let matriz = [];
    let mayor;
    
    function crearMatriz(){    
        for (x = 0; x < cols; x++){
            matriz[x] = [];
            for (y = 0; y < row; y++){
                matriz[x][y] = Math.random()*100;
            }
        }
    }
    
    function encontrarMayor (mat){
        let aux = 0;
        for (x = 0; x < cols; x++){
            for(y = 0; y < row; y++){
                if (mat[x][y] > aux){
                    aux = mat[x][y];
                }
            }
        }
        return aux
    }

    crearMatriz();

    mayor = encontrarMayor(matriz);

    console.table(matriz);

    console.log(mayor);

})