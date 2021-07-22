import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HeroCarousel.css';

const HeroCarouserl = () => (
    <div id="hero" className="d-flex justify-cntent-center align-items-center">
        <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

            {/* -- Slide 1 -- */}
            <div className="carousel-item active">
                <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Consigue más clientes</h2>
                <p className="animate__animated animate__fadeInUp">
                    <strong>Con MARKETING DIGITAL diseñamos, planificamos y gestionamos la presencia de tu negocio</strong> <br/>
                    Aplicamos estrategias dirigidas a cada uno de tus clientes.  <br/>
                    Ofrece a cada persona lo que necesita en el momento exacto.
                </p>
                <Link to="/" className="btn-get-started animate__animated animate__fadeInUp">Leer más</Link>
                </div>
            </div>

            {/* -- Slide 2 -- */}
            <div className="carousel-item">
                <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Diseño Web</h2>
                <p className="animate__animated animate__fadeInUp">
                    <strong>Programación, Diseño y Maquetación Web, Blogs y Generación de Contenido Web.</strong> <br/> 
                    En pocos segundos puedes ganar o perder un cliente.  <br/>
                    Tienes un instante para causar una buena impresión.  
                </p>
                <Link to="/" className="btn-get-started animate__animated animate__fadeInUp">Leer más</Link>
                </div>
            </div>

            {/* <!-- Slide 3 --> */}
            <div className="carousel-item">
                <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Identidad corporativa</h2>
                <p className="animate__animated animate__fadeInUp">
                    <strong>Comunica de una forma efectiva la identidad de tu empresa.</strong> <br/>
                    El tener bien definida su identidad corporativa hará que su empresa sea reconocible y que se la relacione con atributos que sean de valor para sus clientes.
                </p>
                <Link to="/" className="btn-get-started animate__animated animate__fadeInUp">Leer más</Link>
                </div>
            </div>

            <Link to="#" className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
            </Link>

            <Link to="#" className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
            </Link>

        </div>
    </div>
);

export default HeroCarouserl;