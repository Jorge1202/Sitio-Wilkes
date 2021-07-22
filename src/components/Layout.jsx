import React from 'react'

import Footer from './Footer';

const Layout = (props) => { 
    return (
        <React.Fragment>    
            {props.children}
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;