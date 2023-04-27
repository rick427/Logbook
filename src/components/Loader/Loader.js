import React from 'react';

import "./Loader.css";

const Loader = () => {
    return (
        <div className="loader">
            {[...Array(10).keys()].map((_item, idx) => (
                <div key={idx} className="loader-item" />
            ))}
        </div>
    )
}

export default Loader;
