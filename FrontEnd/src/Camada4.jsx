import apresentando from './assets/sun.png'
import maos from './assets/handshake.png'

function Camada4() {
    return (
        <div className="fundo_colorido3">
            <div className="lado_esquerdo">
                <div className="conteudo_lado_esquerdo">
                    <h1>PRINCIPAIS <span>ATRAÇÕES</span></h1>
                    <h3>CONFIRA O QUE ENCONTRAR EM CADA ANDAR!</h3>
                    <img src={apresentando} alt="" />
                </div>
            </div>

            <div className="lado_direito">

                <div className="fundo_azul">

                    <div className="conteudo">

                        <div className="empilhador">

                        </div>

                        <h3>PÁTIO</h3>
                        <h5>No pátio, os visitantes vão encontrar estandes de empresas e instituições parceiras, oficinas práticas em áreas técnicas como Metalmecânica, Redes e Eletricidade, além da Troca de Livros. Também terá a participação do Frei com seus livros e a padaria com doces, salgados e pastel fresquinho.</h5>

                    </div>


                    <div className="conteudo">

                        <div className="empilhador">

                        </div>

                        <h3>PRIMEIRO ANDAR</h3>
                        <h5>Aqui o foco é a área da Administração. Os alunos vão poder conhecer mais sobre Empreendedorismo, Logística, Recursos Humanos, Contabilidade e Documentos Técnicos. Também teremos a presença do CREAS, trazendo informações importantes sobre apoio e serviços sociais.</h5>
                    </div>

                    <div className="conteudo">

                        <div className="empilhador">

                        </div>

                        <h3>SEGUNDO ANDAR</h3>
                        <h5>O segundo andar será o espaço da tecnologia e da criatividade. Quem passar por lá vai encontrar oficinas de Comunicação Visual (com Corel Draw, Photoshop e caricaturas feitas na hora), além das salas de Informática, com montagem e configuração de computadores, redes e programação. Para completar, haverá um espaço especial para aprender a montar um currículo.</h5>
                    </div>

                    <div className="conteudo">

                        <div className="empilhador">

                        </div>

                        <h3>TERCEIRO ANDAR</h3>
                        <h5>No auditório, os alunos vão se preparar para o mercado de trabalho com atividades práticas: simulação de entrevistas de emprego e uma oficina de LinkedIn, para mostrar como usar a rede profissional da melhor forma.</h5>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Camada4