/*
ENGINE DO LAPIDAR PENSANTE
Motor executor do núcleo simbiótico
Site das Letras Edições Literárias / Celeiro Literário
*/


const LapidarPensanteEngine = {

iniciarCicloCompleto(dadosObra){

let retorno = []

retorno.push(
LapidarPensanteCore.carregarObra(dadosObra)
)

retorno.push(
LapidarPensanteCore.executarPrimeiraLeitura()
)

retorno.push(
LapidarPensanteCore.executarSegundaLeitura()
)

retorno.push(
LapidarPensanteCore.executarTerceiraLeitura()
)

retorno.push(
LapidarPensanteCore.decidirFluxo()
)

retorno.push(
LapidarPensanteCore.sincronizarModulos()
)

retorno.push(
LapidarPensanteCore.executarRetroalimentacao()
)

return retorno

},



executarEntradaManual(){

const obraTeste = {

titulo:"Obra em análise",
subtitulo:"Estrutura preliminar",
autor:"Autor não identificado",
genero:"romance",
estrutura:"capítulos",
capitulos:["Capítulo 1","Capítulo 2"],
personagens:["Protagonista","Antagonista"],
clima:"dramático",
status:"carregada"

}

return this.iniciarCicloCompleto(obraTeste)

},



obterStatusCompleto(){

return LapidarPensanteCore.statusSistema()

}



}


console.log("ENGINE DO LAPIDAR PENSANTE INICIALIZADO")
