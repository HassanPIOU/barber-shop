import React from 'react'
import {Link, withRouter} from "react-router-dom";
import {APP_NAME} from "../../base/app";
import {connect} from 'react-redux';
import {compose} from "redux";

const Navbar = ({auth}) => {
    return(
              <header className="herboil__header-area bg-dark">
                  <div className="herboil__header-top-area">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="header-top-inner">

                                      <div className="header-top-logo">
                                          <Link to="/">
                                              <img src="img/logo.png" alt=""/>
                                          </Link>
                                      </div>
                                      <div className="header-top-right">
                                          <div className="header-top-menu">
                                              <ul className="text-white">
                                                         <small>Welcome {auth.me.first_name} !</small>
                                                         <Link to=""><small className="text-danger ml-5">Logout</small></Link>

                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="nav-style-01-wrap">
                      <div className="herboil__navbar-area navbar-area navbar-style-1">
                          <div className="container">
                              <div className="row">
                                  <div className="col-lg-12">
                                      <div className="mobile-menu"></div>
                                      <div className="herboil__navbar-inner">
                                          <div className="herboil__navbar">
                                              <nav>
                                                  <ul>
                                                      <li><Link to="/" className="text-white">Home</Link>
                                                      </li>
                                                      <li><Link to="booking" className="text-white">Booking</Link></li>
                                                      <li><Link to="invoice" className="text-white">Invoice</Link></li>
                                                      <li><Link to="setting" className="text-white">Settings</Link></li>

                                                  </ul>
                                              </nav>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>

    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, {  }))(Navbar);
