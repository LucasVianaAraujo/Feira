import { horaAtual } from "../utils/DateProperty.js"

global.CriarErro = function CriarErro(err) {
    let obj = {
        erro: err.message
    }

    return obj;
}

global.LogErro = function LogErro(err) {
    console.log(`${horaAtual()} Erro: ${err.message}`)
}