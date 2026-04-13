/*
DECISOR DE EXECUÇÃO AUTÔNOMA
Lapidar Pensante

Decide se o sistema:
– executa automaticamente
– executa com supervisão
– pede validação humana
– bloqueia execução
*/


const DecisorExecucaoLP = {


executarDecisao(){

const relatorio = AvaliadorConfiancaLP.relatorioConfianca()

LapidarPensanteCore.registrarDecisao(
"nivel_confianca",
relatorio.nivel
)


switch(relatorio.modo){


case "executar_automaticamente":

LapidarPensanteCore.registrarDecisao(
"execucao",
"automatica"
)

return ComparadorHistoricoLP.executarPipelineRecomendado()



case "executar_com_supervisao":

LapidarPensanteCore.registrarDecisao(
"execucao",
"supervisionada"
)

console.warn("Execução supervisionada recomendada")

return ComparadorHistoricoLP.executarPipelineRecomendado()



case "solicitar_validacao_humana":

LapidarPensanteCore.registrarDecisao(
"execucao",
"validacao_humana"
)

alert("Validação humana necessária antes da execução")

return "aguardando_validacao"



default:

LapidarPensanteCore.registrarDecisao(
"execucao",
"bloqueada"
)

alert("Execução bloqueada por baixa confiança")

return "execucao_bloqueada"

}


},



verRelatorio(){

return AvaliadorConfiancaLP.relatorioConfianca()

}



}


console.log("DECISOR DE EXECUÇÃO LP ATIVO")
