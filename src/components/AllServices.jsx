import React from 'react';

import './styles/AllServices.css';
import CardServices from './CardServicio';

import img1 from '../assets/img/service-details-1.jpg';
import img2 from '../assets/img/service-details-2.jpg';
import img3 from '../assets/img/service-details-3.jpg';
import img4 from '../assets/img/service-details-4.jpg';

const AllServices = () => (
    <section className="service-details">
        <div className="container">

            <div className="row">
                <CardServices
                    img={img1}
                    alt="Marketing"
                    title="Marketing"
                    urlReadMore="/servicios/marketing-digital"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"            
                />

                <CardServices
                    img={img2}
                    alt="Identidad corporativa"
                    title="Identidad corporativa"
                    urlReadMore="/servicios/marketing-digital"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"            
                />

                <CardServices
                    img={img3}
                    alt="Marketing"
                    title="Marketing"
                    urlReadMore="/servicios/marketing-digital"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"            
                />

                <CardServices
                    img={img4}
                    alt="Marketing"
                    title="Marketing"
                    urlReadMore="/servicios/marketing-digital"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"            
                />

            </div>
            
        </div>
    </section>
);

export default AllServices;