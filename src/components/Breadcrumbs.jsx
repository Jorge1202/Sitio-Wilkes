import React from 'react';

import './styles/Breadcrumbs.css';

const Breadcrumbs = ({page, brand, brandUrl, brandHere}) => (
    <section class="breadcrumbs">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{page}</h2>
                <ol>
                    <li><a href={brandUrl}>{brand}</a></li>
                    <li>{brandHere}</li>
                </ol>
            </div>
        </div>
    </section>

);

export default Breadcrumbs; 