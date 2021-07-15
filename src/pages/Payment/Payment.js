import React,{useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {APP_NAME} from "../../base/app";
import Layout from "../../layout/Layout";


const Payment = ({auth}) => {
    useEffect(() => {
        document.title = APP_NAME+" -  Payment historic"
    });


    return (
      <Layout>
           <div className="secondHeader">
               <h1>Payment Historic</h1>
           </div>

          <div className="container mt-5" style={{height : "100vh"}}>
              <div className="row mt-5">
                  <div className="col-lg-12 mt-5">

                  </div>
              </div>
          </div>

       </Layout>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default compose(connect(mapStateToProps, {  }))(Payment);
