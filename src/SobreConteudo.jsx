import frei from './assets/frei.png';

import { Link } from 'react-router';

function SobreConteudo() {
    return (
            <div className="fundo_colorido6">

                <div className="titulo">
                    <h1>SEJAM BEM-VINDOS À <span>ESCOLA</span> DO FREI</h1>
                </div>

                <div className="caixa">
                    <h4>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda, oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, <Link to={'/Cursos'}>o instituto oferece vários cursos</Link>, capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens, promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</h4>
                </div>
            </div>
    )
}

export default SobreConteudo