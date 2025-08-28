import { LerQrCode } from '../../repository/Usuario/qrcode.js';

import { Router } from "express";

const endpoint = Router();

endpoint.post('/vincularqrcode', async (req,resp) => {
    const QrCode = req.body;
    const registro = await LerQrCode(QrCode)
    resp.send(registro);
})

export default endpoint;