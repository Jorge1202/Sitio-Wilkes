import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Footer.css';

const Footer = () => (
    <React.Fragment>
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" className="aos-init aos-animate">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>¡Suscríbete a nuestra Newsletter!</h4>
                            <p>Recibe información sobre la actualidad del sector</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Menú</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Inicio</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios">Servicios</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Proyectos</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Nosotros</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Blog</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Contactanos</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Términos del servicio</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Política de privacidad</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Servicios</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Marketing digital</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Identidad corporativa</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Diseño Web</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Desarrollo web personalizado</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Desarrollo de aplicaciones</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Diseño gráfico</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/servicios/#">Posicionamiento SEO y SEM</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contactanos</h4>
                            <p>
                                A108 Adam Street <br/>
                                New York, NY 535022<br/>
                                United States <br/>
                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Wilkes Services</h3>
                            <p>Es una consultoria especializada en desarrollo de tecnologías, marketing digital e identidad coorporativa.</p>
                            <div className="social-links mt-3">
                                <Link to="/" className="twitter"><i className="bx bxl-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="bx bxl-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="bx bxl-instagram"></i></Link>
                                <Link to="/" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Wilkes Services</span></strong>. All Rights Reserved
                </div>
                {/* <div className="credits">
                    Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                </div> */}
            </div>
        </footer>

        <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </Link>
    </React.Fragment>
);

export default Footer;