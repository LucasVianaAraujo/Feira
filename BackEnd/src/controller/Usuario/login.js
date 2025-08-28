import { AdicionarVisitante } from '../../repository/Usuario/login.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post('/criarvisitante', async (req,resp) => {
    const NovoUsuario = req.body;
    const registro = await AdicionarVisitante(NovoUsuario)
    resp.send(registro);
})

export default endpoint;