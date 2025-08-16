import apresentando from './assets/sun.png'
import maos from './assets/handshake.png'

function Camada4() {
    return (
        <div className="fundo_colorido3">
            <div className="lado_esquerdo">
                <h1>GRANDES <span>CONQUISTAS</span></h1>
                <img src={apresentando} alt="" />
                <h3>REGISTROS DA FEIRA DE PROFISSÕES 2024</h3>
            </div>

            <div className="lado_direito">

                <div className="conteudo">

                    <div className="empilhador">
                        <img src={maos} alt="" />
                        <h1>+50mil</h1>
                    </div>

                    <h3>ALUNOS FORMADOS</h3>
                </div>


                <div className="conteudo">

                    <div className="empilhador">
                        <img src={maos} alt="" />
                        <h1>+50mil</h1>
                    </div>

                    <h3>ALUNOS FORMADOS</h3>
                </div>


                <div className="conteudo">

                    <div className="empilhador">
                        <img src={maos} alt="" />
                        <h1>+50mil</h1>
                    </div>

                    <h3>ALUNOS FORMADOS</h3>
                </div>

            </div>
        </div>
    )
}

export default Camada4