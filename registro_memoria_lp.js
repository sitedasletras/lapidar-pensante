/*
REGISTRO DE MEMÓRIA PERSISTENTE
Lapidar Pensante

Responsável por:
– registrar obras analisadas
– registrar decisões do núcleo
– registrar pipelines executados
– manter histórico evolutivo do sistema
*/


const RegistroMemoriaLP = {

chaveRegistro:"lapidar_pensante_registro_memoria",


estruturaBase(){
return {
obras:[],
decisoes:[],
pipelines:[],
ultimaAtualizacao:null
}
},


lerRegistro(){

let bruto = localStorage.getItem(this.chaveRegistro)

if(!bruto){
return this.estruturaBase()
}

try{
return JSON.parse(bruto)
}catch(e){
return this.estruturaBase()
}

},


salvarRegistro(registro){

registro.ultimaAtualizacao = new Date().toISOString()

localStorage.setItem(
this.chaveRegistro,
JSON.stringify(registro)
)

return "Registro persistente atualizado"
},


registrarObra(){

const memoria = LapidarPensanteCore.memoriaObra

if(!memoria || !memoria.titulo){
return "Nenhuma obra válida para registrar"
}

let registro = this.lerRegistro()

registro.obras.push({
titulo:memoria.titulo || "sem_titulo",
autor:memoria.autor || "sem_autor",
genero:memoria.genero || "nao_identificado",
estrutura:memoria.estrutura || "nao_identificada",
data:new Date().toISOString()
})

return this.salvarRegistro(registro)
},


registrarDecisao(tipoDecisao, detalhe){

let registro = this.lerRegistro()

registro.decisoes.push({
tipo:tipoDecisao || "decisao_nao_informada",
detalhe:detalhe || "sem_detalhe",
data:new Date().toISOString()
})

return this.salvarRegistro(registro)
},


registrarPipeline(tipoPipeline){

let registro = this.lerRegistro()

registro.pipelines.push({
tipo:tipoPipeline || "pipeline_nao_informado",
data:new Date().toISOString()
})

return this.salvarRegistro(registro)
},


verRegistro(){

return JSON.stringify(
this.lerRegistro(),
null,
2
)

},


exportarRegistro(){

const conteudo = this.verRegistro()

const blob = new Blob([conteudo], { type:"application/json" })
const url = URL.createObjectURL(blob)

const a = document.createElement("a")
a.href = url
a.download = "lapidarPensante_memoria_lp.json"
a.click()

URL.revokeObjectURL(url)

return "Registro exportado com sucesso"
},


limparRegistro(){

localStorage.removeItem(this.chaveRegistro)

return "Registro persistente removido com sucesso"
}

}


console.log("REGISTRO DE MEMÓRIA PERSISTENTE LP ATIVO")
