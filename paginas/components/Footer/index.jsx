import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_wrap'>
                <div>
                    <strong>Contabilidade Dendeizeiros</strong> - CNPJ: 00.000.000/0001-00<br />
                </div>
                <div>
                    Rua dos Bobos, 0 - Centro - São Paulo/SP<br />
                    Telefone: (11) 0000-0000 | Email: contato@dendeizeiros.com
                </div>
                <div>
                    {new Date().getFullYear()} Contabilidade Dendeizeiros. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;