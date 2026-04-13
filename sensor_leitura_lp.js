/*
SENSOR DE LEITURA DO LAPIDAR PENSANTE
Detector estrutural inicial do manuscrito
Site das Letras Edições Literárias / Celeiro Literário
*/


const SensorLeituraLP = {

analisarTexto(texto){

let resultado = {

titulo:null,
partes:[],
capitulos:[],
prologo:false,
epilogo:false,
prefacio:false,
estruturaDetectada:false

}


if(!texto || texto.trim()===""){

return resultado

}


let linhas = texto.split("\n").map(l => l.trim()).filter(l => l !== "")


if(linhas.length > 0){

resultado.titulo = linhas[0]

}


linhas.forEach(linha => {

let alta = linha.toUpperCase()


if(alta.includes("PARTE ")){

resultado.partes.push(linha)

}

if(alta.includes("CAPÍTULO") || alta.includes("CAPITULO")){

resultado.capitulos.push(linha)

}

if(alta.includes("PRÓLOGO") || alta.includes("PROLOGO")){

resultado.prologo = true

}

if(alta.includes("EPÍLOGO") || alta.includes("EPILOGO")){

resultado.epilogo = true

}

if(alta.includes("PREFÁCIO") || alta.includes("PREFACIO")){

resultado.prefacio = true

}

})


if(
resultado.titulo ||
resultado.partes.length > 0 ||
resultado.capitulos.length > 0 ||
resultado.prologo ||
resultado.epilogo ||
resultado.prefacio
){
resultado.estruturaDetectada = true
}


return resultado

}

}


console.log("SENSOR DE LEITURA DO LAPIDAR PENSANTE INICIALIZADO")
