// ESTRUCTURA IF
document.getElementById('comparar').addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('numero1').value);
    const num2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado-if');
    if (num1 > num2) {
        resultado.textContent = `El mayor es: ${num1}`;
    } else if (num1 < num2) {
        resultado.textContent = `El mayor es: ${num2}`;
    } else {
        resultado.textContent = 'Los numeros son iguales';
    }
});

// ESTRUCTURA SWITCH
document.getElementById('mostrar-mes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mes').value);
    switch (mes) {
        case 1: alert('Enero'); break;
        case 2: alert('Febrero'); break;
        case 3: alert('Marzo'); break;
        case 4: alert('Abril'); break;
        case 5: alert('Mayo'); break;
        case 6: alert('Junio'); break;
        case 7: alert('Julio'); break;
        case 8: alert('Agosto'); break;
        case 9: alert('Septiembre'); break;
        case 10: alert('Octubre'); break;
        case 11: alert('Noviembre'); break;
        case 12: alert('Diciembre'); break;
        default: alert('Número no válido');
    }
});

// Arrays
const nombres = [];
document.getElementById('agregar-nombre').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        nombres.push(nombre);
        document.getElementById('lista-nombres').innerHTML = nombres.join('<br>');
    }
});

