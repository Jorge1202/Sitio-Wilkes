import React from 'react';
import { Link } from 'react-router-dom';

const Servicio = ({img, alt, title, text, urlReadMore}) => (
    <div className="col-md-6 d-flex align-items-stretch aos-init aos-animate " data-aos="fade-up">
        <div className="card">
            <div className="card-img">
                <img src={img} alt={alt}/>
            </div>
            <div className="card-body">
                <h5 className="card-title"><Link to={urlReadMore}>{title}</Link></h5>
                <p className="card-text">{text}</p>
                <div className="read-more"><Link to={urlReadMore}><i className="bi bi-arrow-right"></i> Leer más</Link></div>
            </div>
        </div>                    
    </div>
);

export default Servicio;