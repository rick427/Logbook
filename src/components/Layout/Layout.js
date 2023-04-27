import React from 'react';
import Navigation from '../Navigation/Navigation';

import "./Layout.css";

//@: PROPS - properties
const Layout = ({children}) => {
    //@: destructioning - object {}

    return (
        <section>
            <Navigation/>

            <div className="children">
                {children}
            </div>
        </section>
    );
}

export default Layout;