import React from 'react';

import './styles.css';
import  loading from '../../assets/img/loader.gif';

const LocalLoader = () => {
    return (
        <div  className="loading__local" >
            <img src={loading} alt=""/>
        </div>
    );
};

export default LocalLoader;
