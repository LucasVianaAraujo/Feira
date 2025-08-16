import { Link } from 'react-router';

import frei from './assets/frei.png'

export function Topo() {
    return (
            <div className="topo">
                <Link to={'/'}>
                <div className="alinhar">
                    <img src={frei} alt="" />
                    <h4>INSTITUTO SOCIAL NOSSA SENHORA DE FÁTIMA</h4>
                </div>
                
                </Link>

                <div className="conexoes">
                    <Link to={'/Sobre'}><h1>SOBRE</h1></Link>
                    <Link to={'/Cursos'}><h1>CURSOS</h1></Link>
                    <Link to={'/Contato'}><button>CONTATO</button></Link>
                </div>
            </div>
    )
}

export default Topo