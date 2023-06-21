//console.log("prueba " + document.getElementById("tf11").innerHTML.);
addEventListener("load", main, false);

var letra = document.getElementsByTagName('button')
var palabra = genPalabra();

function main() {
    recogerLetra()
}

function recogerLetra() {
    for (let boton of letra) {
        boton.addEventListener('click', recogerLetra, false)
    }
    this.innerHTML
}

var plb = 'hola'

for (let i = 0; i < plb.length; i++) {
    console.log(plb.charAt(i))
}


function comprobarPalabra(adivinar, palabra) {
    let arrPalabra = []
    let arrComprobar = []

    for (const i in palabra) {//Divide
        let letra = palabra.charAt(i)
        arrPalabra[i] = letra
    }
    for (const i in adivinar) {
        let letra = adivinar[i]
        arrComprobar[i] = letra
    }

    return arrComprobar

} 