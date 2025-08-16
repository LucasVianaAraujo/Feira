import CursoConteudo from './CursoConteudo.jsx'
import Topo from './Topo.jsx'
import Rodape from './Camada6.jsx'
import './Topo.scss'
import './CursoConteudo.scss'

function Cursos() {
    return (
        <div>
            <Topo />
            <CursoConteudo/>
            <Rodape/>
        </div>
    )
}

export default Cursos