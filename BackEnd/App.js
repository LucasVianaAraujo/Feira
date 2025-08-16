import * as repo from './Repository.js';

import express from 'express'
const api = express();
api.use(express.json());

api.get('/cadastro/listar', async (req, resp) => {
  let registros = await repo.listarUsuarios();
  resp.send(registros);
})

api.post('/cadastro/novousu', async (req, resp) => {
  let novoUsuario = req.body;

  let id = await repo.inserirUsuario(novoUsuario);
  resp.send({ novoId: id });
})

api.listen(5010, () => console.log('Conectado ao Banco de Dados!'));