import { DeletarUsuario } from '../../repository/Usuario/DeletarUsuario.js'

import { Router } from "express";

const endpoint = Router();

endpoint.delete('/admin/deletar/:id', async (req, resp) => {
    const Usuario = req.params.id;

    const registro = await DeletarUsuario(Usuario);

    if (registro.affectedRows === 0) {
        resp.status(404).send({ mensagem: 'Este ID não existe!' })
    }

    else {
        resp.send({
            mensagem: 'Visitante Deletado!',
            registro: (registro)
        });
    }
})

export default endpoint;