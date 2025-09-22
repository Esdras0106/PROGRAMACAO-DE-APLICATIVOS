import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png'

function Home() {
    return (
        <div className='home'>
            <section className='hero'>
                <div className='hero_text'>
                    <h1>Contabilidade descomplicada para seu negócio</h1>
                    <p>Economize tempo e foque no que importa. Cuidamos da sua folha, impostos e obrigações.</p>
                    <div className='hero_cta'>
                        <Link to='/servicos' className='btn primary'>Conheça nossos Serviços</Link>
                        <Link to='/fale-conosco' className='btn'>Fale com um especialista</Link>
                    </div>
                </div>
                <div className='hero_image'>
                </div>
                <img src={logo}alt="Equipe de Contabilidade" />
            </section>

            <section className='features'>
                <h2>Por que nos escolher?</h2>
                <div className='grid cols-3'>
                    <div className='card'>
                        <h3>Atendimento Prioritário</h3>
                        <p>Suporte rápido pelo Whatsapp, e-mail e reuniões online.</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Integrações com bancos e plataformas para automatizar lançamentos e reduzir erros.</p>
                    </div>
                    <div className='card'>
                        <h3>Planejamento tributário</h3>
                        <p>Escolha o regime ideal e estratégias legais para pagar menos impostos.</p>
                    </div>
                </div>
            </section>

            <section className='socialProof'>
                <div className='socialProof_image'>
                    <img src={logo} alt='Escritório da Empresa' />
                </div>
                <h2>Mais de 200 empresas atendidas</h2>
                <p>De MEIs a pequenas e médias em todo o Brasil. Cases em Comércio, Serviços e Tecnologia.</p>
            </section>
        </div>
    );
}

export default Home;