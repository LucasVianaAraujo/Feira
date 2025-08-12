function ContatoConteudo() {
    return (
        <div className="fundo_colorido8">
            <div className="caixa_amarela">

                <div className="titulo">
                    <h1>CONTATO</h1>
                    <h3>Alguma dúvida referente ao dia da feira? entre em contato com a gente!</h3>
                </div>

                <div className="alinhador">

                    <div className="conteudo">

                        <div className="telefone">
                            <h2>Telefone:</h2>
                            <h3>Secretaria: (11) 3798-5037</h3>
                            <h3>WhatsApp: (11) 96398-6252</h3>
                        </div>

                        <div className="email">
                            <h2>E-mail:</h2>
                            <h3>secretaria@acaonsfatima.org.br</h3>
                            <h3>adm@acaonsfatima.org.br</h3>
                        </div>

                    </div>

                    <div className="localizacao">
                        <iframe
                            title="Localização Instituto Social Nossa Senhora de Fátima"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.283144104422!2d-46.707930899999994!3d-23.680333299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sInstituto%20Social%20Nossa%20Senhora%20de%20F%C3%A1tima!5e1!3m2!1spt-BR!2sbr!4v1755014364052!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContatoConteudo