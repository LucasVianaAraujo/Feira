import { ReceberQrCode } from "../../repository/Usuario/ReceberQrCode.js";

import { Router } from "express";

const endpoint = Router();

endpoint.get('/receber/qrcode', async (req,resp) => {
    const email = req.query.email;
    const cpf = req.query.cpf;

    const registro = await ReceberQrCode(email,cpf);
    resp.send(registro);
})

export default endpoint;