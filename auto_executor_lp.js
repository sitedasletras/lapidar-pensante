/*
AUTO EXECUTOR CONTÍNUO
Lapidar Pensante

Executa verificações periódicas do estado da obra
e dispara pipelines automaticamente com apoio do Core
*/


const AutoExecutorLP = {

intervaloExecucao:15000,
ativo:false,
loopExecucao:null,


iniciar(){

if(this.ativo){
return "AutoExecutor já está ativo"
}

this.ativo = true

this.loopExecucao = setInterval(() => {
this.executarCiclo()
}, this.intervaloExecucao)

LapidarPensanteCore.registrarDecisao(
"autoexecutor",
"iniciado"
)

return "AutoExecutor simbiótico iniciado"

},



parar(){

if(!this.ativo){
return "AutoExecutor já está parado"
}

clearInterval(this.loopExecucao)
this.loopExecucao = null
this.ativo = false

LapidarPensanteCore.registrarDecisao(
"autoexecutor",
"interrompido"
)

return "AutoExecutor simbiótico interrompido"

},



executarCiclo(){

const estado = LapidarPensanteCore.carregarEstadoAtual()

SupervisorPipelineLP.registrarExecucao(
"autoexecutor_verificacao_estado"
)

switch(estado){

case "nenhuma_obra":
LapidarPensanteCore.registrarDecisao(
"autoexecutor_estado",
"nenhuma_obra"
)
return "Nenhuma obra carregada"


case "obra_sem_texto":
LapidarPensanteCore.registrarDecisao(
"autoexecutor_estado",
"obra_sem_texto"
)
return "Texto base não encontrado"


case "texto_sem_capitulos":
LapidarPensanteCore.registrarDecisao(
"autoexecutor_pipeline",
"pipeline_leve"
)
LapidarPensanteCore.registrarPipelineExecutado(
"pipeline_leve"
)
return OrquestradorLP.executarPipelineLeve()


case "obra_curta":
LapidarPensanteCore.registrarDecisao(
"autoexecutor_pipeline",
"pipeline_analise"
)
LapidarPensanteCore.registrarPipelineExecutado(
"pipeline_analise"
)
return OrquestradorLP.executarPipelineAnalise()


case "obra_estruturada":
LapidarPensanteCore.registrarDecisao(
"autoexecutor_pipeline",
"pipeline_completo"
)
LapidarPensanteCore.registrarPipelineExecutado(
"pipeline_completo"
)
return OrquestradorLP.executarPipelineCompleto()


default:
LapidarPensanteCore.registrarDecisao(
"autoexecutor_estado",
"estado_desconhecido"
)
return "Estado não identificado"

}

},



executarCicloManual(){

let resposta = this.executarCiclo()

if(Array.isArray(resposta)){
return resposta.join("\n")
}

return resposta

},



status(){

return this.ativo ? "AutoExecutor ativo" : "AutoExecutor parado"

}



}


console.log("AUTO EXECUTOR LP ATIVO")
