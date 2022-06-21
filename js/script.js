
//DESAFIO INTERACTUAR CON HTML
let incertoTexto= document.createElement('p');
let preciosBajos= document.createElement('p');

incertoTexto.innerHTML="<h2>Haz ejercicio a diario, cuidando tu alimentacion.</h2>";

preciosBajos.innerText="Los precios mas bajos";



document.body.append(incertoTexto, preciosBajos)

//DESAFIO DE INCORPORAR EVENTOS

const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value))
        let classification = ''

        if (imc < 18.5) {
            classification = 'Bajopeso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Sobrepeso'
        } else if (imc < 35) {
            classification = 'Obesidad Grado I'
        } else if (imc < 41) {
            classification = 'Obesidad Grado II'
        } else {
            classification = 'Obesidad Grado III'
        } 

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
        resultado.innerHTML = 'Rellena los campos'
    }
}

