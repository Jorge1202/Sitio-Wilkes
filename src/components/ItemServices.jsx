import React from 'react';
import { Link } from 'react-router-dom';

import './styles/ItemServices.css';

const ItemServices = () => (
    <section className="services">
        <div className="container">

            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">
                    <div className="icon-box icon-box-pink">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4 className="title"><Link to="">Marketing</Link></h4>
                        <p className="description">
                            ¿Qué identidad proyectas? Te ayudamos en tu estrategia online con las últimas herramientas para alcanzar a tu público objetivo con éxito.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box icon-box-cyan">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4 className="title"><Link to="">Diseño web</Link></h4>
                        <p className="description">
                            Atractiva, intuitiva y adaptable. Tienes un instante para causar una buena impresión. En pocos segundos tu diseño web puede hacerte ganar un cliente.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-green">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4 className="title"><Link to="">Identidad visual</Link></h4>
                        <p className="description">
                            Colores y formas. Lo que te diferencia de los demás es quién eres. 
                            Te ayudamos con tu diseño y creación de marca, logos, tarjetas, fotografía, vídeo corporativo y mas.
                        </p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-blue">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 className="title"><Link to="">Desarrollo e Integración</Link></h4>
                        <p className="description">
                            Automatización de funciones permite al personal enfocarse en las tareas más importantes y urgentes.
                            Desarrollamos desde sitios y sistemas web, App móviles hasta landingpages.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>
);

export default ItemServices;