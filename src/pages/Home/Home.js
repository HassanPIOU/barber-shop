import React,{useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import {APP_NAME} from "../../base/app";


const Home = ({ auth}) => {
    useEffect(() => {
        document.title = APP_NAME+" -  home"
    });


    return (

        <>
            <div className="herboil__slider-area">
                <div className="herboil__slider-active slick-arrow-style-1 slick-dots-style-1">
                    <div className="herboil__slide-item">
                        <div className="herboil__slide-item-inner  gradient-bg"  >
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-12 align-self-center">
                                        <div className="herboil__slide-content">
                                            <div className="herboil__slide-content-inner col-lg-6">
                                                <h1 style={{color : "#fff"}}>Barber Shop Booking</h1>
                                                <div className="btn-wrapper text-white" >
                                                    {auth.isAuthenticated ?
                                                        <Link to="booking" className="boxed-btn  btn-block text-center">Book now</Link>
                                                         :
                                                        <Link to="login" className="boxed-btn btn-block text-center">Book now</Link>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>

  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, {  }))(Home);
