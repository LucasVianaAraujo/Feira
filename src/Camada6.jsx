import { Link } from 'react-router';

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
                            <Link to='https://www.instagram.com/institutonsfatima/'>
                                <img src={insta} alt="" />
                            </Link>
                        </div>

                        <div className="bloco_redes">
                            <Link to={'https://www.facebook.com/institutonsfatima'}>
                            <img src={facebook} alt="" />
                            </Link>
                        </div>

                        <div className="bloco_redes">
                            <Link to={'https://www.tiktok.com/@institutonsfatima_?is_from_webapp=1&sender_device=pc'}>
                            <img src={tiktok} alt="" />
                            </Link>
                        </div>

                        <div className="bloco_redes">
                            <Link to={'https://www.linkedin.com/company/institutonsfatima/'}>
                            <img src={linkedin} alt="" />
                            </Link>
                        </div>

                        <div className="bloco_redes">
                            <Link to={'https://www.youtube.com/@institutosocialnossasenhor3548/videos'}>
                            <img src={youtube} alt="" />
                            </Link>
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