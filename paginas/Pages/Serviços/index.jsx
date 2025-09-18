// paginas\Pages\Serviços\index.jsx

import './style.css'

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Serviços de Contabilidade</h1>
            <p>Oferecemos uma gama completa de serviços contábeis para atender às necessidades do seu negócio, incluindo:</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Abertura de empresa</h3>
                    <p>Do zero á regularção: CAE, contrato social e inscrição</p>
                </div>
                <div className='card'>
                    <h3>Fiscal & Triubutário</h3>
                    <p>Apuração de impostos, SPED, DCTF, EFD e obrigações acessorias.</p>
                </div>
                <div className='card'>
                    <h3>Folha de pagamento</h3>
                    <p>Processamento de folha, encargos sociais, admissões e demissões.</p>

                </div>
            </div>
        </section>
    )
}

export default Servicos;