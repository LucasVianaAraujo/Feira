import AdicionarUsuario from '../src/controller/AdicionarUsuario.js'
import listarUsuarios from '../src/controller/ListarUsuarios.js';
import MensagemErro from '../src/controller/MensagemErro.js'
import AdicionarVisitante from '../src/controller/Usuario/login.js'
import Buscar from './controller/Usuario/buscarvisitante.js'
import Deletar from './controller/Usuario/ExcluirVisitante.js'
import Verificar from './controller/Usuario/VerificarAdm.js'
import ReceberQrCode from './controller/Usuario/ReceberQrCode.js'
import VeficiarUsuario from './controller/Usuario/VeficiarUsuario.js'

export default function adicionarRotas(api) {
    api.use(AdicionarUsuario);
    api.use(listarUsuarios);
    api.use(MensagemErro);
    api.use(AdicionarVisitante);
    api.use(Buscar);
    api.use(Deletar);
    api.use(Verificar);
    api.use(ReceberQrCode);
    api.use(VeficiarUsuario);
}