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

    function mayorFilaPares(mat){
        let aux = 0;
        for (x = 0; x < cols; x++){
            if (x % 2 == 0){
                for (y = 0; y < row; y++){
                    if (mat[x][y] >= aux) {
                        aux = mat[x][y];
                    }
                }
                console.log ("Fila: " + x + " - Numero mas alto: " + aux);
                aux = 0;
            }
        }

    }
    

    function menorFilasImpares(mat){
        let aux
        for (x = 1; x < cols; x++){
            if (x % 2 != 0){
                for (y = 0; y < row; y++){
                    if (y == 0){
                        aux = mat[x][y];
                    }
                    if (mat[x][y] < aux) {
                        aux = mat[x][y];
                    }
                }
                console.log ("Fila: " + x + " - Numero mas bajo: " + aux);
            }
        }
    }

    function promedioFila(mat){
        let arr = [];
        let aux;
        for (x = 0; x < cols; x++){
            aux = 0;
            for(y = 0; y < row; y++){
                aux += mat[x][y];
            }
            arr[x] = aux/10;
        }
        console.log(arr);
    }

    crearMatriz();

    mayor = encontrarMayor(matriz);

    console.table(matriz);

    console.log(mayor);

    mayorFilaPares(matriz);

    menorFilasImpares(matriz);

    promedioFila(matriz);

})