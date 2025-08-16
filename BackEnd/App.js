import * as repo from './Repository.js';

import express from 'express'
const api = express();
api.use(express.json());

api.get('/cadastro', async (req, resp) => {
  let registros = await repo.listarUsuarios();
  resp.send(registros);
})

api.listen(5010, () => console.log('Conectado ao Banco de Dados!'));