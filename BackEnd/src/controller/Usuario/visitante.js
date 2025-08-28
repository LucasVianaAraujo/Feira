import { Login } from '../../repository/Usuario/visitante.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post('/vincularqrcode', async (req,resp) => {
    const NovoLog = req.body;
    const registro = await Login(NovoLog)
    resp.send(registro);
})

export default endpoint;