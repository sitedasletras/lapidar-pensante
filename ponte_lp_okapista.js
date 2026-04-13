/*
PONTE SIMBIÓTICA
Lapidar Pensante ↔ OKapista
Responsável por transmitir metadados estruturais para geração de capa
*/


const PonteLPOKapista = {

chaveIntegracao:"lp_okapista_bridge",


gerarPacoteVisual(){

const memoria = LapidarPensanteCore.memoriaObra

if(!memoria || !memoria.titulo){

return "Nenhuma obra válida carregada no núcleo simbiótico"

}


const pacote = {

origem:"lapidar_pensante",

titulo:memoria.titulo || "sem_titulo",

subtitulo:memoria.subtitulo || null,

autor:memoria.autor || "sem_autor",

genero:memoria.genero || "nao_identificado",

clima:memoria.clima || "nao_definido",

estrutura:memoria.estrutura || "nao_identificada",

capitulosDetectados:memoria.capitulos.length,

partesDetectadas:memoria.partes ? memoria.partes.length : 0,

prologo:memoria.prologo || false,

epilogo:memoria.epilogo || false,

status:"pacote_visual_gerado"

}


localStorage.setItem(

this.chaveIntegracao,

JSON.stringify(pacote)

)

return "Pacote visual enviado ao OKapista com sucesso"

},



verPacoteVisual(){

const pacote = localStorage.getItem(this.chaveIntegracao)

if(!pacote){

return "Nenhum pacote visual disponível"

}

return JSON.stringify(JSON.parse(pacote), null, 2)

},



validarPacote(){

const pacote = localStorage.getItem(this.chaveIntegracao)

if(!pacote){

return "Pacote inexistente"

}

return "Pacote visual válido e pronto para uso no OKapista"

},



limparPacote(){

localStorage.removeItem(this.chaveIntegracao)

return "Pacote visual removido"

}



}


console.log("PONTE LP ↔ OKAPISTA INICIALIZADA")
