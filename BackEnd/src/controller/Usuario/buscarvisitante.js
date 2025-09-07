import { BuscarVisitanteFeiraFiltro, BuscarVisitanteFeira } from '../../repository/Usuario/BuscarUsuario.js'

import { Router } from "express";

const endpoint = Router();

endpoint.get('/buscar/visitante/feira/:nome', async (req, resp) => {
    const nome = req.params.nome;
    const registro = await BuscarVisitanteFeira(nome);
    resp.send(registro);
})

endpoint.get('/buscar/visitante/:nome', async (req, resp) => {
    const nome = req.params.nome;
    const registro = await BuscarVisitanteFeiraFiltro(nome);
    resp.send(registro);
})

export default endpoint