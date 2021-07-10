import React,{useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import {APP_NAME} from "../../base/app";
import {
    RangeDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import Layout from "../../layout/Layout";



const Invoice = ({ auth}) => {
    useEffect(() => {
        document.title = APP_NAME+" -  Invoice"
    });

    return (
            <>
                <Layout>
                 <div className="container">
                     <div className="container" style={{height : "100vh"}}>
                         <div className="box-content">
                             <h3 className="mt-3 text-white">My invoices</h3>

                             <form >

                                 <div className="step__head__inv"></div>
                                 <h3></h3>
                                 <div className="form-group" style={{padding : "20px"}}>
                                     <RangeDatePicker
                                         startDatePlaceholder="From"
                                         endDatePlaceholder="To"
                                         highlightToday
                                     />
                                 </div>


                                 <p className="text-center">
                                     <button
                                         className="boxed-btn add-to-cart-btn gold"
                                         type="button"
                                     >
                                         <span>Proceed</span>
                                     </button>
                                 </p>
                             </form>
                         </div>
                     </div>
                 </div>
                </Layout>
           </>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default compose(connect(mapStateToProps, {  }))(Invoice);
