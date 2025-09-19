import {Verificar} from '../../repository/Usuario/Verificar.js'

import { Router } from "express";

const endpoint = Router();

endpoint.get('/verificar/admin/:email/:cpf', async (req,resp) => {
    const email = req.params.email;
    const cpf = req.params.cpf;

    const registro = await Verificar(email, cpf);
    resp.send(registro);
})

export default endpoint;