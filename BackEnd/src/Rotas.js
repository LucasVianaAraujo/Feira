import AdicionarUsuario from '../src/controller/AdicionarUsuario.js'
import listarUsuarios from '../src/controller/ListarUsuarios.js';
import MensagemErro from '../src/controller/MensagemErro.js'
import AdicionarVisitante from '../src/controller/Usuario/login.js'

export default function adicionarRotas(api) {
    api.use(AdicionarUsuario);
    api.use(listarUsuarios);
    api.use(MensagemErro);
    api.use(AdicionarVisitante);
}