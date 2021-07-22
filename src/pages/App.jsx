import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// STYLES
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

// JS 
import {appendScript} from '../assets/js/scripts/appendScript';

// PAGES
import Home from './Home';
import Services from './Services'

// Componentes 
import Layout from '../components/Layout';

class APP extends React.Component {
    
    render(){
        return(    
            <React.Fragment>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/servicios" component={Services} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </React.Fragment>
        );
    }

    componentDidMount () {
        appendScript("assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
        appendScript("assets/vendor/aos/aos.js");
        appendScript("assets/vendor/glightbox/js/glightbox.min.js");
        appendScript("assets/vendor/isotope-layout/isotope.pkgd.min.js");
        appendScript("assets/vendor/php-email-form/validate.js");
        appendScript("assets/vendor/purecounter/purecounter.js");
        appendScript("assets/vendor/swiper/swiper-bundle.min.js");
        appendScript("assets/vendor/waypoints/noframework.waypoints.js");
       
        appendScript("assets/js/main.js");
    }


}
export default APP;