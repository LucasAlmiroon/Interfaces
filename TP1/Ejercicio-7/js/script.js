document.addEventListener ("DOMContentLoaded", function(){
    let canvas = document.querySelector("#canvas");
    let input = document.querySelector('#input');
    let ctx = canvas.getContext("2d");

    input.onchange = e => {
        let file = e.target.files[0];
        
        let reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = readerEvent => {
            let content = readerEvent.target.result;
            
            let image = new Image();
            
            image.src = content;
        
            image.onload = function(){
                let imageAspectRatio = (1.0 * this.height) / this.width;
                let imageScaledWidth = canvas.width;
                let imageScaledHeight = canvas.width * imageAspectRatio;
        
                ctx.drawImage(image,0,0,imageScaledWidth,imageScaledHeight);
                
                let imageData = ctx.getImageData(0,0,imageScaledWidth,imageScaledHeight);
                let boton = document.querySelector("#filtro");
                boton.addEventListener("click",aplicarFiltroGris(imageData));
            }
        }
    }
    
    function aplicarFiltroGris(imageData){
        let w = imageData.width;
        let h = imageData.height;
        for (let x = 0; x < w; x++){
            for (let y = 0; y < h; y++){
                let index = (x + w * y)*4;
                let r = getRed(index,imageData);
                let g = getGreen(index,imageData);
                let b = getBlue(index,imageData);
                
                let gris = (r+g+b)/3;
                
                imageData.data[index + 0] = gris;
                imageData.data[index + 1] = gris;
                imageData.data[index + 2] = gris;
                
                ctx.putImageData(imageData, 0, 0);            
            }
        }
    }
    
    function getRed(index,imageData){
        return  imageData.data[index + 0];
    }
    
    function getGreen(index,imageData){
        return  imageData.data[index + 1];
    }
    
    function getBlue(index,imageData){
        return  imageData.data[index + 2];
    }       

});