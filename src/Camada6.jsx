import insta from './assets/instagram.png'
import facebook from './assets/facebook.png'
import tiktok from './assets/tiktok.png'
import linkedin from './assets/linkedin.png'
import youtube from './assets/youtube.png'

function Camada6() {
    return (
        <div className="fundo_colorido5">

            <div className="alinhador">

                <div className="redes_sociais">

                    <div className="alinhador_bloco">
                        <div className="bloco_redes">
                            <img src={insta} alt="" />
                        </div>

                        <div className="bloco_redes">
                            <img src={facebook} alt="" />
                        </div>

                        <div className="bloco_redes">
                            <img src={tiktok} alt="" />
                        </div>

                        <div className="bloco_redes">
                            <img src={linkedin} alt="" />
                        </div>

                        <div className="bloco_redes">
                            <img src={youtube} alt="" />
                        </div>
                    </div>

                    <div className="direitos">
                        <h3>© Instituto Social Nossa Senhora de Fátima. Todos os direitos reservados.</h3>
                    </div>
                </div>

                <div className="instituto_info">
                    <h1>Instituto Social Nossa Senhora de Fátima</h1>
                    <h1>Av. Cel. Octaviano de Freitas Costa, 463</h1>
                    <h1>Veleiros - São Paulo - SP 04773-000</h1>
                </div>

            </div>

        </div>
    )
}

export default Camada6