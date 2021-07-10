import React from 'react';

import './PageLoader/styles.css';
import  loading from '../assets/img/loader.gif';

const AcceptGeo = () => {
    return (
        <div  className="loading__local" >
            <img src={loading} alt=""    />
            <p style={{color : "#fff"}}>Finding your Location</p>
        </div>
    );
};

export default AcceptGeo;
