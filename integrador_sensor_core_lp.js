/*
INTEGRADOR SENSOR → CORE
Lapidar Pensante
Responsável por transformar leitura estrutural em memória simbiótica ativa
*/


const IntegradorSensorCoreLP = {

processarTextoBruto(texto){

if(!texto || texto.trim()===""){

return "Texto vazio. Nada para processar."

}


let leitura = SensorLeituraLP.analisarTexto(texto)


let estruturaDetectada = {

titulo: leitura.titulo || "Título não identificado",
subtitulo: null,
autor: "Autor não identificado",
genero: "não identificado",
estrutura: leitura.estruturaDetectada ? "estrutura reconhecida" : "estrutura parcial",
capitulos: leitura.capitulos || [],
partes: leitura.partes || [],
personagens: [],
clima: "não identificado",
prologo: leitura.prologo,
epilogo: leitura.epilogo,
prefacio: leitura.prefacio,
textoBase: texto,
status: "carregada automaticamente via sensor estrutural"

}


LapidarPensanteCore.carregarObra(estruturaDetectada)


return {

mensagem:"Texto interpretado e memória simbiótica atualizada",

estrutura:estruturaDetectada

}

},



executarLeituraAutomaticaCompleta(texto){

let resultadoSensor = this.processarTextoBruto(texto)


let cicloEngine =

LapidarPensanteEngine.iniciarCicloCompleto(
LapidarPensanteCore.memoriaObra
)


return {

sensor:resultadoSensor,
engine:cicloEngine

}

}



}


console.log("INTEGRADOR SENSOR → CORE ATIVO")
