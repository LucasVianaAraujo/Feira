import apresentando from './assets/slaaaaa.JPG'

function Camada4() {
    return (
        <div className="fundo_colorido3">
            <div className="alinhador">
                <div className="caixa-imagem">
                    <div className="titulo">
                        <h1>GRANDES CONQUISTAS</h1>
                    </div>
                    <img src={apresentando} alt="" />
                    <h2>REGISTROS DA FEIRA DE PROFISSÕES 2024</h2>
                </div>
                <div className="elementos">
                    <h1>ALUNOS FORMADOS</h1>
                    <h1>EMPRESAS BENEFICIADAS</h1>
                    <h1>INDICAÇÕES AO MERCADO DE TRABALHO</h1>
                </div>
            </div>
        </div>
    )
}

export default Camada4