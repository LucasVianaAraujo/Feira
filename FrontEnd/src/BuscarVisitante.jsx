import { useState } from "react";
import axios from 'axios'

export default function BuscarVisitante() {

  const [nomeBusca, setNomeBusca] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  async function BuscarVisitanteApi() {
    try {
      const url = `http://localhost:5001/buscar/visitante/feira/${nomeBusca}`;
      const resp = await axios.get(url);
      const dados = resp.data;

      setResultadoBusca(dados);
    }

    catch (err) {
      console.error(err);
      setResultadoBusca('Erro ao buscar usuário.');
    }
  }

  return (
    <div className="fundocolorido11">

      <div className="titulo">
        <h1>BUSCAR <br /> <span>VISITANTE</span></h1>
      </div>

      <div className="bloco_busca_visitante">
        <label>NOME:</label>
        <input type='text' value={nomeBusca} onChange={e => setNomeBusca(e.target.value)} />
      </div>

      <button onClick={BuscarVisitanteApi}>BUSCAR</button>

      {resultadoBusca && (
        <div className="campo_resultados">
          <div className="dupla_resultado">
            {resultadoBusca.map((visitante, index) => (
              <div key={index} className="resultado">
                <h1>VISITANTE: {visitante.nome}</h1>
                <h1>PREVISÃO CHEGADA: {visitante.previsao_chegada}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}