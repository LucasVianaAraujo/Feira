import frei from './assets/frei.png';

function SobreConteudo() {
    return (
        <div className="fundo_colorido">
            <div className="topo">
                <div className="alinhar">
                    <img src={frei} alt="" />
                    <h4>INSTITUTO SOCIAL NOSSA SENHORA DE FÁTIMA</h4>
                </div>

                <div className="conexoes">
                    <h1>SOBRE</h1>
                    <h1>CURSOS</h1>
                    <button>CONTATO</button>
                </div>
            </div>

            <div className="fundo_colorido6">

                <div className="titulo">
                    <h1>SEJAM BEM-VINDOS À <span>ESCOLA</span> DO FREI</h1>
                </div>

                <div className="caixa">
                    <h4>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda, oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, o instituto oferece vários cursos, capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens, promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</h4>
                </div>
            </div>
        </div>
    )
}

export default SobreConteudo