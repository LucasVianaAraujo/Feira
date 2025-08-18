import { Router } from "express";

const endpoints = Router();

endpoints.get('/erro', async (req, resp) => {
    try {
        throw new Error('Eu sou um erro conveniente, só apareço se você quiser.')

    } catch (err) {
        LogErro(err);
        resp.status(400).send(LogErro(err))
    }
})

export default endpoints;