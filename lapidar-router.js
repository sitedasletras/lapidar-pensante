// ===============================
// LAPIDAR ROUTER CENTRAL DEFINITIVO
// ===============================

console.log("Lapidar Router iniciado")

// ===============================
// CARREGAR MÓDULOS DO CÉREBRO
// ===============================

import "./engine_lp.js"
import "./sensor_leitura_lp.js"
import "./detector_estado_lp.js"
import "./orquestrador_lp.js"
import "./supervisor_pipeline.js"


// ===============================
// CARREGAR MEMÓRIA SIMBIÓTICA
// ===============================

import "./registro_memoria.js"
import "./retroalimentacao.js"


// ===============================
// CARREGAR PONTES DE EXECUÇÃO
// ===============================

import "./ponte_lp_diagramacao.js"
import "./ponte_lp_okapista.js"
import "./ponte_lp_segunda_linguas.js"
import "./ponte_lp_silos.js"


// ===============================
// INICIAR PROCESSAMENTO DA OBRA
// ===============================

function iniciarLapidar(texto){

console.log("Recebendo manuscrito...")

window.sensorLeitura(texto)

console.log("Sensor ativado")

window.detectarEstado()

console.log("Estado detectado")

window.decidirFluxo()

console.log("Fluxo decidido")

window.executarPipeline()

console.log("Pipeline executado")

}


// ===============================
// TESTE AUTOMÁTICO
// ===============================

iniciarLapidar("Capítulo 1 - início da narrativa")
