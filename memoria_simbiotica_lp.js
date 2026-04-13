/*
MEMÓRIA SIMBIÓTICA DO LAPIDAR PENSANTE
Camada persistente de memória estrutural do Andróide Pensador
*/


const MemoriaSimbioticaLP = {

chave:"lapidar_pensante_memoria",


salvar(){

localStorage.setItem(
this.chave,
JSON.stringify(LapidarPensanteCore.memoriaObra)
)

return "Memória simbiótica salva"

},



carregar(){

let memoria = localStorage.getItem(this.chave)

if(!memoria){

return "Nenhuma memória salva"

}

let dados = JSON.parse(memoria)

LapidarPensanteCore.memoriaObra = dados
LapidarPensanteCore.estadoSistema.obraCarregada = true

return "Memória simbiótica carregada"

},



limpar(){

localStorage.removeItem(this.chave)

LapidarPensanteCore.memoriaObra = {
titulo:null,
subtitulo:null,
autor:null,
genero:null,
estrutura:null,
capitulos:[],
personagens:[],
clima:null,
status:"não analisado"
}

LapidarPensanteCore.estadoSistema.obraCarregada = false
LapidarPensanteCore.estadoSistema.estruturaReconhecida = false
LapidarPensanteCore.estadoSistema.fluxoDefinido = false
LapidarPensanteCore.estadoSistema.modulosSincronizados = false
LapidarPensanteCore.estadoSistema.retroalimentacaoAtiva = false

return "Memória simbiótica limpa"

},



ver(){

return JSON.stringify(
LapidarPensanteCore.memoriaObra,
null,
2
)

}



}


console.log("MEMÓRIA SIMBIÓTICA DO LAPIDAR PENSANTE INICIALIZADA")
