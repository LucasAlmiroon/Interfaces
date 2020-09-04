document.addEventListener ("DOMContentLoaded", function(){

  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  let input = document.querySelector('#inputGroupFile01');
  let nuevo = document.querySelector('#nuevo');
  let botonfiltrogris = document.querySelector("#filtrogris");
  let botonfiltronegativo = document.querySelector("#filtronegativo");
  let botonfiltrosepia = document.querySelector("#filtrosepia");
  let botonfiltrobinario = document.querySelector("#filtrobinario");

  input.onchange = e =>{cargarImagen(e)}
  
  function cargarImagen(e){
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

      }
    }
  }

  function aplicarFiltroNegativo(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let w = imageData.width;
    let h = imageData.height;
    for (let x = 0; x < w; x++){
        for (let y = 0; y < h; y++){
            let index = (x + w * y)*4;
            let r = getRed(index,imageData);
            let g = getGreen(index,imageData);
            let b = getBlue(index,imageData);
            
            
            imageData.data[index + 0] = 255 - r;
            imageData.data[index + 1] = 255 - g;
            imageData.data[index + 2] = 255 - b;
            
            ctx.putImageData(imageData, 0, 0);            
        }
    }
  }

  function aplicarFiltroGris(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
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

  function aplicarFiltroSepia(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let w = imageData.width;
    let h = imageData.height;
    for (let x = 0; x < w; x++){
        for (let y = 0; y < h; y++){
            let index = (x + w * y)*4;
            let r = getRed(index,imageData);
            let g = getGreen(index,imageData);
            let b = getBlue(index,imageData);
            
            let sepia = ((0.3 * r) + (0.6* g) + (0.1* b))
            
            imageData.data[index + 0] = Math.min(sepia + 40,255);
            imageData.data[index + 1] = Math.min(sepia + 15,255);
            imageData.data[index + 2] = sepia;
            
            ctx.putImageData(imageData, 0, 0);            
        }
    }
  }

  function aplicarFiltroBinario(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let w = imageData.width;
    let h = imageData.height;
    
    for (let x = 0; x < w; x++){
      
      for (let y = 0; y < h; y++){
        
        let index = (x + w * y)*4;
        let r = getRed(index,imageData);
        let g = getGreen(index,imageData);
        let b = getBlue(index,imageData);

        if (((r + g + b)/3) <= 128){
          console.log("entra")
          imageData.data[index + 0] = 0;
          imageData.data[index + 1] = 0;
          imageData.data[index + 2] = 0;
        
        }else{
        
          imageData.data[index + 0] = 255;
          imageData.data[index + 1] = 255;
          imageData.data[index + 2] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }
  
  function canvasNuevo(){
    input.value= '';

    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    for(let x = 0; x <= canvas.width; x++){
      for (let y = 0; y <= canvas.height; y++){
        let index = (x*imageData.width*y)*4;
        imageData.data[index + 0] = 255;
        imageData.data[index + 1] = 255;
        imageData.data[index + 2] = 255;
        ctx.putImageData(imageData,x,y);
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
    
  nuevo.addEventListener('click',canvasNuevo);
  botonfiltrogris.addEventListener('click',aplicarFiltroGris);
  botonfiltronegativo.addEventListener('click',aplicarFiltroNegativo);
  botonfiltrosepia.addEventListener('click',aplicarFiltroSepia);
  botonfiltrobinario.addEventListener('click',aplicarFiltroBinario);
});
/*filtro negativo, invertir colores (255-r,255-g,255-b)*/