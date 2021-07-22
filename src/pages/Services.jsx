import React from 'react';

import Navbar from '../components/Navbar';
import AllServices from '../components/AllServices';
import Breadcrumbs from '../components/Breadcrumbs'

const Services = () => (
    <React.Fragment>
        <Navbar link={'servicios'}/>
        <main id="main"> 
            <Breadcrumbs 
                page= "Servicios" 
                brand= "Inicio"
                brandUrl="/"
                brandHere= "Servicios"
            />
            <AllServices/>

        </main>
    </React.Fragment>
);

export default Services;