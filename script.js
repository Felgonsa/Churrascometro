// carne - 200g pessoa / hora - +6h 100/h
// cerveja- 600ml pessoa /hora- +6h 400ml/h
// refrigerante- 350ml/hora pessoa - +6h 200ml/h

// crianças comem a metade de carne e a mesma quantidade de refrigerante

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputTempo = document.getElementById("tempo")
let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let tempo = inputTempo.value

    let totalCarne = adultos * carnePP(tempo) * tempo + criancas * carnePP(tempo) / 2 * tempo
    let totalCerveja = adultos * cervejaPP(tempo) * tempo
    let totalRefrigerante = adultos * refrigerantePP(tempo) * tempo + criancas * refrigerantePP(tempo) * tempo

    resultado.innerHTML = `<P> ${totalCarne/1000} Kg de carne</p>`
    resultado.innerHTML += `<P> ${Math.ceil(totalCerveja/255)} Latas cerveja</p>`
    resultado.innerHTML += `<P> ${Math.ceil(totalRefrigerante/2000)} Garrafas de refrigerante</p>`
}

function carnePP(tempo) {
    if (tempo >= 6) {
        return 100
    } else {
        return 200
    }
}


function cervejaPP(tempo) {
    if (tempo >= 6) {
        return 350
    } else {
        return 500
    }
}

function refrigerantePP(tempo) {
    if (tempo >= 6) {
        return 200
    } else {
        return 350
    }
}