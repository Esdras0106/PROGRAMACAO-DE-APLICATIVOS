import { NavLink, Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className='header_wrap'>
                <Link to='/' className='brand'>
                    <img src={logo} alt='Logo da Contabilidade' className='logo' />
                    <span>Contabilidade Dendeizeiros</span>
                </Link>

                <nav className='nav'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Serviços
                    </NavLink>
                    <NavLink to='/sobre-nos' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Sobre Nós
                    </NavLink>
                    <NavLink to='/fale-conosco' className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Fale Conosco
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

            export default Header;