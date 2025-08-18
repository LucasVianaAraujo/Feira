import { BuscarUsuario } from "../../repository/UsuarioRep/BuscarUsuario.js";

export default async function consultarUsuario(nome) {
    // lógica de negócio
    let registros = await BuscarUsuario(nome);
    return registros;
}