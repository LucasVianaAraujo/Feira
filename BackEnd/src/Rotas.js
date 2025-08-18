import AdicionarUsuario from '../src/controller/AdicionarUsuario.js'
import listarUsuarios from '../src/controller/ListarUsuarios.js';
import MensagemErro from '../src/controller/MensagemErro.js'

export default function adicionarRotas(api) {
    api.use(AdicionarUsuario);
    api.use(listarUsuarios);
    api.use(MensagemErro);
}