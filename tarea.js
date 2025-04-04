


function sumar() {
    let numero1 = Number(document.getElementById('num1').value)
    let numero2 = Number(document.getElementById('num2').value)
    let suma = numero1 + numero2
    console.log(suma)
    let resultado = document.getElementById('resultado')
    resultado.textContent=suma
}