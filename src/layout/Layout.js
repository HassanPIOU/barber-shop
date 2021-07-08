import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Layout = ({ children }) => {
  return (
    <>
        <div className="body-wrapper  bg-dark">
            <div className="body-overlay" id="body-overlay"></div>
      <Navbar />
      {children}
      <Footer />
        </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
