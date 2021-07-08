import React from 'react'
import Loader from 'react-loader-spinner';

const Pageloader = () => {
    return(
        <div className="container mx-auto">
            <Loader type="Puff" color="#101010" height={100} width={100}  className="homeLoader"/>
        </div>
    )
}

export default Pageloader