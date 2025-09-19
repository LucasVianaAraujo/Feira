import api from "./api.js"
import { useLocation } from "react-router"

export default function TelaDetalhesContent() {
    const location = useLocation();
    const nome = location.state?.nome;
    const codigo = location.state?.codigo;

    return (
        <div className="fundo_colorido13">
            <div className="bloco_amarelo">
                <h1>PARABÉNS, <span>{nome}</span>, VOCÊ JÁ É UM VISITANTE!</h1>
                <h3>Guarde bem, esse é seu código único de entrada:</h3>
                <p>{codigo}</p>
            </div>
        </div>
    )
}
