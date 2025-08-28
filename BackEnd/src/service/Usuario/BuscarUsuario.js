import { BuscarUsuario } from "../../repository/Usuario/BuscarUsuario.js";

export default async function consultarUsuario(nome) {
    // lógica de negócio
    let registros = await BuscarUsuario(nome);
    return registros;
}