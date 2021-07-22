import React from 'react';
 
import './styles/UsoTecnologia.css';

import img1 from '../assets/img/beneficios/identidad-2.svg';  //008AF1 azul
import img2 from '../assets/img/beneficios/marketing-2.svg';  //90CAF9  #90CAF9
import img4 from '../assets/img/beneficios/transformacion-digital-2.svg';

const UsoTecnologia = () => (
    <section className="features">
        <div className="container">

            <div className="section-title">
                <h2>Beneficios de la tecnología digital</h2>
                <p>
                    La tecnología digital ha llegado  para resolver los problemas a través de sistemas innovadores que son adaptables a las necesidades de cada organización, 
                    puede ayudar a los dueños de negocios, a transformar sus empresas en organizaciones más inteligentes, efectivas y versátiles.
                </p>
            </div>

            <div className="row aos-init aos-animate" data-aos="fade-up">
                <div className="col-md-5 order-1 order-md-2">
                    <img src={img4} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1">
                    <h3>Transforma tu negocio a digital</h3>
                    <p className="fst-italic">
                        Razones por las cuales las empresas se inclinan hacia el desarrollo digital
                    </p>
                    <ul>
                        <li><i className="bi bi-check"></i> Automatización del flujo de trabajo</li>
                        <li><i className="bi bi-check"></i> Aumentar la productividad</li>
                        <li><i className="bi bi-check"></i> Mejorar la experiencia del cliente</li>
                        <li><i className="bi bi-check"></i> Modernizar la cultura de la empresa.</li>
                        <li><i className="bi bi-check"></i> Centrarse en las necesidades empresariales básicas</li>
                    </ul>
                </div>
            </div>

            <div className="row aos-init aos-animate" data-aos="fade-up">
                <div className="col-md-5">
                    <img src={img1} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-4">
                    <h3>Identidad a tu negocio</h3>
                    <p className="fst-italic">
                        La identidad corporativa está relacionada tanto con los elementos estéticos que transmiten la idea de la compañía, 
                        como con los valores con los que actúa esto hace que <strong>el cliente asocie determinados valores, símbolos, colores y prácticas a una compañía</strong>.
                    </p>
                    <p>
                        La identidad corporativa incluye:
                    </p>
                    <ul>
                        <li><i className="bi bi-check"></i> Historia de la marca</li>
                        <li><i className="bi bi-check"></i> Misión, visión, objetivos</li>
                        <li><i className="bi bi-check"></i> Identidad visual (Logotipo, Paleta de colores, Tipografía)</li>
                        <li><i className="bi bi-check"></i> Público objetivo</li>
                        <li><i className="bi bi-check"></i> Mensaje</li>
                    </ul>
                </div>
            </div>

            <div className="row aos-init aos-animate" data-aos="fade-up">
                <div className="col-md-5 order-1 order-md-2">
                    <img src={img2} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-7 pt-5 order-2 order-md-1">
                    <h3>Marketing digital</h3>
                    <p className="fst-italic">
                        Genera más ingresos con el marketing digital, dirigimos anuncios a un público determinado, logrando así campañas mucho más eficientes y resultados de éxito.
                    </p>
                    <ul>
                        <li><i className="bi bi-check"></i> Campañas pensadas y diseñadas para cada negocio y cada cliente.</li>
                        <li><i className="bi bi-check"></i> Acerca tus productos o servicios a posibles clientes en los medios digitales.</li>
                        <li><i className="bi bi-check"></i> Generar lazos más fuertes con clientes potenciales y/o existentes.</li>
                    </ul>
                </div>
            </div>

   

        </div>
    </section>

);

export default UsoTecnologia;