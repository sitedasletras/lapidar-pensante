/*
SUPERVISOR DE PIPELINE
Lapidar Pensante

Responsável por:

– registrar execuções
– evitar duplicações
– permitir retomada
– criar trilha editorial
*/


const SupervisorPipelineLP = {

chaveRegistro:"lp_pipeline_execucao",



registrarExecucao(etapa){

let historico =
JSON.parse(
localStorage.getItem(this.chaveRegistro)
) || []

historico.push({

etapa:etapa,
data:new Date().toISOString()

})

localStorage.setItem(
this.chaveRegistro,
JSON.stringify(historico)
)

return "Execução registrada: " + etapa

},



verHistorico(){

let historico =
localStorage.getItem(this.chaveRegistro)

if(!historico){

return "Nenhuma execução registrada"

}

return JSON.stringify(
JSON.parse(historico),
null,
2
)

},



limparHistorico(){

localStorage.removeItem(this.chaveRegistro)

return "Histórico removido com sucesso"

},



ultimaExecucao(){

let historico =
JSON.parse(
localStorage.getItem(this.chaveRegistro)
)

if(!historico || historico.length === 0){

return "Nenhuma execução encontrada"

}

return historico[historico.length - 1]

}



}


console.log("SUPERVISOR DE PIPELINE LP ATIVO")
