import apresentando from './assets/sun.png'
import adm from './assets/admmlkexplicando.png'
import admlkkkkk from './assets/aaaaaaaaasssssssssssss.png'
import vr from './assets/oculosvraminausandoele.png'
import interview from './assets/entrevistadeempregosimulatorreal.png'
import slaa from './assets/tendinadakkk.png'

function Camada4() {
    return (
        <div className="fundo_colorido3">

            <div className="limitador">

                <div className="titulo">
                    <h1>PRINCIPAIS <span>ATRAÇÕES</span></h1>
                    <h3>CONFIRA O QUE ENCONTRAR EM CADA ANDAR!</h3>
                    <div className="bloco_amarelo_baixo" />
                </div>


                <div className="caixa_conteudo">
                    <img src={slaa} alt="" />
                    <div className="caixa_texto">
                        <h1>PÁTIO</h1>
                        <h3>No pátio, os visitantes vão encontrar estandes de empresas e instituições parceiras, oficinas práticas em áreas técnicas como Metalmecânica, Redes e Eletricidade, além da Troca de Livros. Também terá a participação do Frei com seus livros e a padaria com doces, salgados e pastel fresquinho.</h3>
                    </div>
                </div>

                <div className="caixa_conteudo1">
                    <img src={admlkkkkk} alt="" />
                    <div className="caixa_texto">
                        <h1>PRIMEIRO ANDAR</h1>
                        <h3>Aqui o foco é a área da Administração. Os alunos vão poder conhecer mais sobre Empreendedorismo, Logística, Recursos Humanos, Contabilidade e Documentos Técnicos. Também teremos a presença do CREAS, trazendo informações importantes sobre apoio e serviços sociais.</h3>
                    </div>
                </div>

                <div className="caixa_conteudo">
                    <img src={vr} alt="" />
                    <div className="caixa_texto">
                        <h1>SEGUNDO ANDAR</h1>
                        <h3>O segundo andar será o espaço da tecnologia e da criatividade. Quem passar por lá vai encontrar oficinas de Comunicação Visual (com Corel Draw, Photoshop e caricaturas feitas na hora), além das salas de Informática, com montagem e configuração de computadores, redes e programação. Para completar, haverá um espaço especial para aprender a montar um currículo.</h3>
                    </div>
                </div>

                <div className="caixa_conteudo1">
                    <img src={interview} alt="" />
                    <div className="caixa_texto">
                        <h1>TERCEIRO ANDAR</h1>
                        <h3>No auditório, os alunos vão se preparar para o mercado de trabalho com atividades práticas: simulação de entrevistas de emprego e uma oficina de LinkedIn, para mostrar como usar a rede profissional da melhor forma.</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Camada4