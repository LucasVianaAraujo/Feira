import { Router } from "express";
import * as repo from '../repository/Repository.js';

const endpoints = Router();

endpoints.post('/cadastro/novousu', async (req, resp) => {
  try {
    let novoUsuario = req.body;

    let id = await repo.inserirUsuario(novoUsuario);
    resp.send({ novoId: id });

  } catch (err) {
    resp.status(400).send(LogErro(err))
  }
})

export default endpoints;