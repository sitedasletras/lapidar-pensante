// ===============================
// LAPIDAR BOOTSTRAP OFICIAL
// ===============================


// ===============================
// IMPORTAÇÃO DO NÚCLEO
// ===============================

import "./core_lp.js"
import "./engine_lp.js"


// ===============================
// IMPORTAÇÃO DOS SENSORES
// ===============================

import "./sensor_leitura_lp.js"
import "./detector_estado_lp.js"


// ===============================
// IMPORTAÇÃO DO SISTEMA DECISÓRIO
// ===============================

import "./decisor_execucao_lp.js"
import "./orquestrador_lp.js"


// ===============================
// IMPORTAÇÃO DA MEMÓRIA SIMBIÓTICA
// ===============================

import "./memoria_simbiotica_lp.js"
import "./registro_memoria_lp.js"
import "./retroalimentacao_lp.js"


// ===============================
// IMPORTAÇÃO DO SUPERVISOR
// ===============================

import "./supervisor_pipeline_lp.js"


// ===============================
// IMPORTAÇÃO DAS PONTES
// ===============================

import "./ponte_lp_diagramacao.js"
import "./ponte_lp_okapista.js"
import "./ponte_lp_segunda_linguas.js"
import "./ponte_lp_silos.js"


// ===============================
// FUNÇÃO PRINCIPAL DO SISTEMA
// ===============================

export function iniciarLapidar(manuscrito){

console.log("Inicializando Lapidar Pensante")

window.sensorLeitura(manuscrito)

window.detectarEstado()

window.decidirFluxo()

window.executarPipeline()

console.log("Pipeline concluído")

}
