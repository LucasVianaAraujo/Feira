import { Link } from "react-router"

export function Camada5() {
    return (
        <div className="fundo_colorido4">
            <div className="titulo">
                <h1>VENHA <span>VISITAR O INSTITUTO</span> NO DIA 27/09 (SÁBADO)</h1>
            </div>

            <Link to={'Login'}>
                <button>INSCREVER-SE</button>
            </Link>
            <h3>Não perca tempo, a inscrição leva menos de três minutos!</h3>
            <h1>#VEMPROFREI</h1>
        </div>
    )
}

export default Camada5