import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Video.css';
import portada from '../assets/img/why-us.jpg';

const Video = () => (
    <section className="why-us section-bg aos-init aos-animate" data-aos="fade-up" date-aos-delay="200">
      <div className="container">

        <div className="row">
            <div className="col-lg-6 video-box">
                <img src={portada} className="img-fluid" alt=""/>
                <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" target="_blank" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></Link>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

                <div className="icon-box">
                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                    <h4 className="title"><Link to="/">Lorem Ipsum</Link></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div className="icon-box">
                    <div className="icon"><i className="bx bx-gift"></i></div>
                    <h4 className="title"><Link to="/">Nemo Enim</Link></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
            </div>
        </div>
      </div>
    </section>
);

export default Video;