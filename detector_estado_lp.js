/*
DETECTOR AUTOMÁTICO DE ESTADO DA OBRA
Lapidar Pensante

Responsável por:

– identificar maturidade estrutural
– sugerir pipeline ideal
– disparar fluxo correto automaticamente
*/


const DetectorEstadoLP = {


analisarEstado(){

const memoria =
LapidarPensanteCore.memoriaObra


if(!memoria || !memoria.titulo){

return "nenhuma_obra"

}


if(!memoria.textoBase){

return "obra_sem_texto"

}


if(memoria.capitulos.length === 0){

return "texto_sem_capitulos"

}


if(memoria.capitulos.length < 3){

return "obra_curta"

}


if(memoria.capitulos.length >= 3){

return "obra_estruturada"

}


return "estado_desconhecido"

},



executarFluxoAutomatico(){

const estado =
this.analisarEstado()


switch(estado){

case "nenhuma_obra":

return "Nenhuma obra carregada no núcleo simbiótico"



case "obra_sem_texto":

return "Texto base não encontrado"



case "texto_sem_capitulos":

return OrquestradorLP.executarPipelineLeve()



case "obra_curta":

return OrquestradorLP.executarPipelineAnalise()



case "obra_estruturada":

return OrquestradorLP.executarPipelineCompleto()



default:

return "Estado não identificado"

}

},



verEstadoAtual(){

return this.analisarEstado()

}



}


console.log("DETECTOR DE ESTADO LP ATIVO")
