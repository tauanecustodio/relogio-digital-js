const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    function doisDigitos(digito) {
        if (digito < 10) {
            return "0" + digito;
        } else {
            return digito;
        }
    }

    horas.textContent = doisDigitos(hr);
    minutos.textContent = doisDigitos(min);
    segundos.textContent = doisDigitos(s);
})