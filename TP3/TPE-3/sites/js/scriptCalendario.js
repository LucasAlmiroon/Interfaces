
function countdown (){
    let hoy = new Date();
    let estreno = new Date(2020,11,7);

    let hora = hoy.getTime();
    let horaEstreno = estreno.getTime();

    let resta = horaEstreno - hora;

    let s = Math.floor(resta / 1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    let d = Math.floor(h/24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    document.querySelector("#dias").textContent = d;
    document.querySelector("#dias").innerHTML = d;

    document.querySelector("#horas").textContent = h;
    document.querySelector("#minutos").textContent = m;
    document.querySelector("#segundos").textContent = s;

}
countdown();
setInterval(countdown,1000);