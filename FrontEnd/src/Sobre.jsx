import SobreConteudo from './SobreConteudo.jsx'
import Rodape from './Camada6.jsx'
import Topo from './Topo.jsx'
import './SobreConteudo.scss'

function Sobre() {
    return (
        <div>
            <Topo/>
            <SobreConteudo/>
            <Rodape/>
        </div>
    )
}

export default Sobre