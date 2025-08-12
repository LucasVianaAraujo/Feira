import Topo from './Topo.jsx'
import ContatoConteudo from './ContatoConteudo.jsx'
import Rodape from './Camada6.jsx'
import './ContatoConteudo.scss'

function Contato() {
    return (
        <div>
            <Topo />
            <ContatoConteudo/>
            <Rodape/>
        </div>
    )
}

export default Contato