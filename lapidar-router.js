// ===============================
// LAPIDAR ROUTER CENTRAL
// ===============================

const state = {

    obra: null,
    estrutura: null,
    pipeline: [],
    status: "aguardando_upload"

}


// ===============================
// RECEBER OBRA DO COFRE
// ===============================

function receberObra(nomeArquivo){

    state.obra = nomeArquivo

    state.status = "obra_recebida"

    console.log("Obra recebida:", nomeArquivo)

}


// ===============================
// DETECTAR ESTRUTURA DA OBRA
// ===============================

function detectarEstrutura(texto){

    if(texto.includes("Capítulo")){

        state.estrutura = "romance"

    } else {

        state.estrutura = "texto_curto"

    }

    console.log("Estrutura detectada:", state.estrutura)

}


// ===============================
// DEFINIR PIPELINE AUTOMÁTICO
// ===============================

function definirPipeline(){

    if(state.estrutura === "romance"){

        state.pipeline = [

            "revisao",
            "psicoestudo",
            "diagramacao",
            "traducao",
            "audiobook",
            "trailer"

        ]

    } else {

        state.pipeline = [

            "revisao",
            "diagramacao"

        ]

    }

    console.log("Pipeline definido:", state.pipeline)

}


// ===============================
// EXECUTAR PIPELINE
// ===============================

function executarPipeline(){

    state.pipeline.forEach(modulo => {

        console.log("Executando módulo:", modulo)

    })

    state.status = "pipeline_executado"

}


// ===============================
// EXPORTAR ESTADO GLOBAL
// ===============================

function mostrarEstado(){

    console.log(state)

}



// ===============================
// SIMULAÇÃO DE EXECUÇÃO COMPLETA
// ===============================

function iniciarProcessamento(texto){

    receberObra("manuscrito_autor.docx")

    detectarEstrutura(texto)

    definirPipeline()

    executarPipeline()

    mostrarEstado()

}


// ===============================
// TESTE AUTOMÁTICO
// ===============================

iniciarProcessamento("Capítulo 1 - início da história")
