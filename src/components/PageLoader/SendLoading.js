import React from 'react';

import './styles.css';
import  loading from '../../assets/img/loader.gif';

const SendingLoading = () => {
    return (
        <div  className="sending__call" >
            <img src={loading} alt=""    />
            <p style={{color : "#fff"}}>Sending booking...</p>
        </div>
    );
};

export default SendingLoading;
