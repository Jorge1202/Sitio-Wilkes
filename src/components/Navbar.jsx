import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'

const Navbar = ({ link }) => { 

    
    return(
        <div id="header" className="fixed-top d-flex align-items-center">  {/* header-transparent */}
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <h1 className="text-light"><Link to="/"><span>Wilkes</span> <span className="">Services</span> </Link></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/" className={link==='inicio' ? 'active' : undefined}>Inicio</Link></li>
                        <li class="dropdown"><Link to="/servicios" className={link==='servicios' ? 'active' : undefined}><span>Servicios</span> <i class="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="/servicios/marketing-digital">Marketing digital</Link></li>
                                <li><Link to="/servicios/identidad-corporativa">Identidad corporativa</Link></li>
                                <li><Link to="/servicios/diseño-web">Diseño web</Link></li>
                                <li><Link to="/servicios/desarrollo-web">Desarrollo web personalizado</Link></li>
                                <li><Link to="/servicios/aplicaciones">Desarrollo de aplicaciones</Link></li>
                                <li><Link to="/servicios/diseño-grafico">Diseño gráfico</Link></li>
                                <li><Link to="/servicios/seo">Posicionamiento de SEO y SEM</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/proyectos" className={link==='proyectos' ? 'active' : undefined}>Proyectos</Link></li>
                        <li><Link to="/nosotros" className={link==='nosotros' ? 'active' : undefined}>Nosotros</Link></li>
                        <li><Link to="/blog" className={link==='blog' ? 'active' : undefined}>Blog</Link></li>
                        <li><Link to="/contactanos" className={link==='contactanos' ? 'active' : undefined}>Contactanos</Link></li>
                        {/* <li><Link to="team.html">Team</Link></li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;