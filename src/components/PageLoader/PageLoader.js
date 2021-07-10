import React from 'react'
import  loading from '../../assets/img/loader.gif';

const Pageloader = () => {
    return(
        <div  className="dark__local" >
            <img src={loading} alt=""    />
        </div>
    )
}

export default Pageloader