// paginas\Pages\FaleConosco\index.jsx

import './style.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }
    return (
        <section className='contato'>
            <h1>Fale Conosco</h1>
            <p>Tire suas dúvidas e peça um orçamento sem compromisso. </p>

            <form className="form" onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className="field">
                        <span className="label">Nome:</span>
                        <input type="text" placeholder="Seu Nome" required />
                    </label>
                    <label className="field">
                        <span className="label">Email:</span>
                        <input type="email" placeholder="voce@email.com" required />
                    </label>
                    <label className="field">
                        <span className="label">Telefone:</span>
                        <input type="text" placeholder="(99)9 9999-9999" required />
                    </label>
                </div>
                <label className="field">
                    <span className="label">Assunto:</span>
                    <input type="text" placeholder="Assunto da empresa" required />
                </label>
                <label className="field">
                    <span className="label">Mensagem:</span>
                    <textarea placeholder="Escreva sua mensagem aqui..." required></textarea>
                </label>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </section>
    )
}

export default FaleConosco;