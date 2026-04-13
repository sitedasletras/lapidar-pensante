/*
AUTO EXECUTOR CONTÍNUO
Lapidar Pensante

Executa verificações periódicas do estado da obra
e dispara pipelines automaticamente quando necessário
*/


const AutoExecutorLP = {


intervaloExecucao:15000, // 15 segundos


ativo:false,


iniciar(){

if(this.ativo){

return "AutoExecutor já está ativo"

}


this.ativo = true


this.loopExecucao = setInterval(() => {

this.executarCiclo()

}, this.intervaloExecucao)


return "AutoExecutor simbiótico iniciado"

},



parar(){

if(!this.ativo){

return "AutoExecutor já está parado"

}


clearInterval(this.loopExecucao)

this.ativo = false


return "AutoExecutor simbiótico interrompido"

},



executarCiclo(){

const estado = DetectorEstadoLP.verEstadoAtual()


SupervisorPipelineLP.registrarExecucao(
"autoexecutor_verificacao_estado"
)


switch(estado){

case "nenhuma_obra":
return


case "obra_sem_texto":
return


case "texto_sem_capitulos":

SupervisorPipelineLP.registrarExecucao(
"autoexecutor_pipeline_leve"
)

OrquestradorLP.executarPipelineLeve()

break


case "obra_curta":

SupervisorPipelineLP.registrarExecucao(
"autoexecutor_pipeline_analise"
)

OrquestradorLP.executarPipelineAnalise()

break


case "obra_estruturada":

SupervisorPipelineLP.registrarExecucao(
"autoexecutor_pipeline_completo"
)

OrquestradorLP.executarPipelineCompleto()

break

}


},



status(){

return this.ativo ?
"AutoExecutor ativo"
:
"AutoExecutor parado"

}



}


console.log("AUTO EXECUTOR LP ATIVO")
