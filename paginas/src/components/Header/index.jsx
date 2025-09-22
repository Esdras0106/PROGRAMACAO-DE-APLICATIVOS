import { NavLink, Link } from 'react-router-dom'
import './style.css';
import logo from '../../assets/logo.png'


function Header() {
    return (
        <header className="header">
                    <div className="header_wrap" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1.5rem', padding:'1.2rem 0 0.7rem 1.5rem', position:'relative'}}>
                        <Link to="/" className="contabilidade-link" style={{fontSize:'1.7rem', fontWeight:'700', color:'#222', letterSpacing:'1.5px', textTransform:'uppercase', fontFamily:'Montserrat,sans-serif', textDecoration:'none', lineHeight:'90px', display:'inline-block'}}>Contabilidade</Link>
                <div className="logo" style={{position:'absolute', left:'8rem', width:'130px', height:'130px', minWidth:'130px', minHeight:'130px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={logo} alt="Logo da Contabilidade" style={{height:'110px', width:'110px', objectFit:'contain'}} />
                </div>
                    </div>
            <nav className="nav" style={{display:'flex', gap:'2rem', justifyContent:'center', marginTop:'0.5rem'}}>
                <NavLink to="/servicos" className="link">Serviços</NavLink>
                <NavLink to="/sobre-nos" className="link">Sobre Nós</NavLink>
                <NavLink to="/fale-conosco" className="link">Fale Conosco</NavLink>
            </nav>
        </header>
    );
}

export default Header;