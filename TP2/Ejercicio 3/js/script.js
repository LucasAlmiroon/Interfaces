let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");

function cambiarFondo2(){
    div2.classList.add('blue');
}

function cambiarFondo3(){
    div3.classList.add('red');
}


div2.addEventListener("click",cambiarFondo2);
div3.addEventListener("mouseenter",cambiarFondo3);