/*
AVALIADOR DE CONFIANÇA
Lapidar Pensante

Mede o grau de confiança das decisões automáticas
do núcleo simbiótico para permitir:
– execução autônoma
– validação assistida
– bloqueio preventivo
*/


const AvaliadorConfiancaLP = {


calcularConfiancaBase(){

const atual = LapidarPensanteCore.memoriaObra

if(!atual){
return 0
}

let pontos = 0

if(atual.titulo) pontos += 15
if(atual.autor) pontos += 10
if(atual.genero) pontos += 10
if(atual.estrutura) pontos += 15
if(atual.capitulos && atual.capitulos.length > 0) pontos += 20
if(typeof atual.prologo !== "undefined") pontos += 5
if(typeof atual.epilogo !== "undefined") pontos += 5
if(atual.textoBase && atual.textoBase.trim() !== "") pontos += 20

return pontos

},



calcularConfiancaHistorica(){

const experiencia = ComparadorHistoricoLP.avaliarExperienciaPrevia()

let pontos = 0

if(typeof experiencia.mesmoGenero === "number"){
pontos += Math.min(experiencia.mesmoGenero * 3, 15)
}

if(typeof experiencia.mesmoAutor === "number"){
pontos += Math.min(experiencia.mesmoAutor * 4, 20)
}

if(typeof experiencia.mesmaEstrutura === "number"){
pontos += Math.min(experiencia.mesmaEstrutura * 3, 15)
}

return pontos

},



confiancaFinal(){

let base = this.calcularConfiancaBase()
let historica = this.calcularConfiancaHistorica()

let total = base + historica

if(total > 100){
total = 100
}

return total

},



classificarConfianca(){

let total = this.confiancaFinal()

if(total >= 85){
return "alta"
}

if(total >= 60){
return "media"
}

if(total >= 35){
return "baixa"
}

return "critica"

},



decidirModoExecucao(){

let nivel = this.classificarConfianca()

switch(nivel){

case "alta":
return "executar_automaticamente"

case "media":
return "executar_com_supervisao"

case "baixa":
return "solicitar_validacao_humana"

default:
return "bloquear_execucao"

}

},



relatorioConfianca(){

return {
confiancaBase:this.calcularConfiancaBase(),
confiancaHistorica:this.calcularConfiancaHistorica(),
confiancaFinal:this.confiancaFinal(),
nivel:this.classificarConfianca(),
modo:this.decidirModoExecucao()
}

}



}


console.log("AVALIADOR DE CONFIANÇA LP ATIVO")
