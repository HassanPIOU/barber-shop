import React from 'react';

import './styles.css';
import  loading from '../../assets/img/loader.gif';

const JustLoading = () => {
    return (
        <div  className="just__local" >
            <img src={loading} alt=""    />
        </div>
    );
};

export default JustLoading;
