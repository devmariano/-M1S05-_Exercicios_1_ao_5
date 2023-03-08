let frase = "abcdefghijklmnopqrstuvwxyz"
var contador = 0
var letra = ""

function verifica(txt){
console.log(txt)
if(typeof frase === "string"){
    for (var i = 0; i < frase.length; i++) {
        letra = frase[i].trim()
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            contador++;
        }
    }
    if(contador>0) {
        console.log(`Numero de vogais encontradas ${contador}`)
    } else {
        console.log("Não foram encontradas vogais")
    }
}else{
    console.log(`A frase não é string`)
}
}

verifica("Verificação 1:")
frase=56
verifica("Verificação 2:")


