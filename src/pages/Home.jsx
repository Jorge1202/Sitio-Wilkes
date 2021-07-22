import React from 'react';

import Navbar from '../components/Navbar';
import HeroCarouserl from '../components/HeroCarousel';
import ItemServices from '../components/ItemServices';
import Video from '../components/Video';
import UsoTecnologia from '../components/UsoTecnologia';

const Home = () => (
    <React.Fragment>
        <Navbar link={'inicio'}/>
        <HeroCarouserl/>
        <ItemServices/>
        <Video/>
        <UsoTecnologia/>
    </React.Fragment>
);

export default Home;