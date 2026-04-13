/*
COMPARADOR DE HISTÓRICO SIMBIÓTICO
Lapidar Pensante

Compara obra atual com histórico persistente
para apoiar decisões futuras do núcleo
*/


const ComparadorHistoricoLP = {


compararGenero(){

const registro = RegistroMemoriaLP.lerRegistro()

const atual = LapidarPensanteCore.memoriaObra

if(!atual){
return "Sem obra atual carregada"
}

let iguais = registro.obras.filter(
obra => obra.genero === atual.genero
)

return iguais.length

},



compararAutor(){

const registro = RegistroMemoriaLP.lerRegistro()

const atual = LapidarPensanteCore.memoriaObra

if(!atual){
return "Sem obra atual carregada"
}

let iguais = registro.obras.filter(
obra => obra.autor === atual.autor
)

return iguais.length

},



compararEstrutura(){

const registro = RegistroMemoriaLP.lerRegistro()

const atual = LapidarPensanteCore.memoriaObra

if(!atual){
return "Sem obra atual carregada"
}

let iguais = registro.obras.filter(
obra => obra.estrutura === atual.estrutura
)

return iguais.length

},



avaliarExperienciaPrevia(){

let genero = this.compararGenero()
let autor = this.compararAutor()
let estrutura = this.compararEstrutura()

return {

mesmoGenero:genero,
mesmoAutor:autor,
mesmaEstrutura:estrutura

}

},



recomendarPipeline(){

const experiencia = this.avaliarExperienciaPrevia()

if(experiencia.mesmoGenero > 3){

return "pipeline_completo"

}


if(experiencia.mesmaEstrutura > 2){

return "pipeline_analise"

}


return "pipeline_leve"

},



executarPipelineRecomendado(){

let recomendacao = this.recomendarPipeline()

LapidarPensanteCore.registrarDecisao(
"comparador_pipeline",
recomendacao
)

switch(recomendacao){

case "pipeline_completo":
return OrquestradorLP.executarPipelineCompleto()


case "pipeline_analise":
return OrquestradorLP.executarPipelineAnalise()


default:
return OrquestradorLP.executarPipelineLeve()

}

}



}


console.log("COMPARADOR HISTÓRICO LP ATIVO")
