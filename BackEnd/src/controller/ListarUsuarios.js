import { Router } from "express";
import * as repo from '../repository/Repository.js';
import consultarUsuario from "../service/Usuario/BuscarUsuario.js";

const endpoints = Router();

endpoints.get('/cadastro/listar', async (req, resp) => {
  try {
    let registros = await repo.listarUsuarios();
    resp.send(registros);
  } catch (err) {
    resp.status(400).send(LogErro(err))
  }
})


endpoints.get('/pesquisar/usuario', async (req,resp) => {
  try {
    let nome = req.query.nome;
    
    let registros = await consultarUsuario(nome)
    
    resp.send(registros);
  } 
  
  catch (err) {
    resp.status(400).send(LogErro(err))
  }
})

export default endpoints;