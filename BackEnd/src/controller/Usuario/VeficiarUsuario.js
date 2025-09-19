import { VeficiarVisitante } from "../../repository/Usuario/VerificarUsuario.js";

import { Router } from "express";

const endpoint = Router();

endpoint.get('/verificar/visitante/:email/:cpf', async (req, resp) => {
    const email = req.params.email;
    const cpf = req.params.cpf;

    const registro = await VeficiarVisitante(email, cpf);
    resp.send(registro);
})

export default endpoint;