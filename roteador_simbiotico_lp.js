/*
ROTEADOR SIMBIÓTICO DO LAPIDAR PENSANTE
Responsável por encaminhar a obra para os módulos do ecossistema
*/


const RoteadorSimbioticoLP = {

destinos:{
lapidarBase:"lapidar_base",
okapista:"okapista",
avaliacao:"avaliacao_literaria",
segundaLingua:"segunda_linguas",
silos:"silos",
portal:"portal"
},


decidirDestino(memoria){

if(!memoria){
return "sem_memoria"
}

if(memoria.genero && memoria.genero.toLowerCase()==="poesia"){
return this.destinos.silos
}

if(memoria.genero && memoria.genero.toLowerCase()==="romance"){
return this.destinos.lapidarBase
}

if(memoria.genero && memoria.genero.toLowerCase()==="conto"){
return this.destinos.avaliacao
}

return this.destinos.portal

},


registrarRota(destino){

localStorage.setItem(
"rota_lapidar_pensante",
destino
)

return "Rota registrada: " + destino

},


obterRota(){

return localStorage.getItem("rota_lapidar_pensante") || "nenhuma_rota"

},


encaminharAutomaticamente(){

let memoria = LapidarPensanteCore.memoriaObra

let destino = this.decidirDestino(memoria)

this.registrarRota(destino)

LapidarPensanteCore.estadoSistema.fluxoDefinido = true

return "Encaminhamento automático definido para: " + destino

},


verMapaDeDestino(){

let rota = this.obterRota()

let mapa = {
rotaAtual: rota,
origem: "lapidar_pensante",
status: "encaminhamento ativo"
}

return JSON.stringify(mapa, null, 2)

}

}


console.log("ROTEADOR SIMBIÓTICO DO LAPIDAR PENSANTE INICIALIZADO")
