/*
CORE CENTRAL
Lapidar Pensante

Responsável por:
– armazenar estado simbiótico da obra
– integrar detector
– integrar supervisor
– integrar memória persistente
– alimentar decisões automáticas
*/


const LapidarPensanteCore = {


memoriaObra:null,


carregarEstadoAtual(){

let estado = DetectorEstadoLP.verEstadoAtual()

SupervisorPipelineLP.registrarExecucao(
"core_estado_detectado_" + estado
)

return estado

},



registrarObra(memoria){

this.memoriaObra = memoria

RegistroMemoriaLP.registrarObra()

SupervisorPipelineLP.registrarExecucao(
"core_registro_obra"
)

return "Obra registrada no núcleo simbiótico"

},



registrarDecisao(tipo, detalhe){

RegistroMemoriaLP.registrarDecisao(tipo, detalhe)

SupervisorPipelineLP.registrarExecucao(
"core_registro_decisao"
)

return "Decisão registrada"

},



registrarPipelineExecutado(tipo){

RegistroMemoriaLP.registrarPipeline(tipo)

SupervisorPipelineLP.registrarExecucao(
"core_pipeline_registrado"
)

return "Pipeline registrado no núcleo"

},



carregarHistorico(){

return RegistroMemoriaLP.verRegistro()

},



exportarHistorico(){

return RegistroMemoriaLP.exportarRegistro()

},



resetarHistorico(){

return RegistroMemoriaLP.limparRegistro()

}


}


console.log("CORE SIMBIÓTICO LP ATIVO")
