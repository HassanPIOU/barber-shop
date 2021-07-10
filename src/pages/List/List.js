import React,{useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import {APP_NAME} from "../../base/app";


const List = ({ auth}) => {
    useEffect(() => {
        document.title = APP_NAME+" -  Booking list"
    });


    return (
      <>

       </>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default compose(connect(mapStateToProps, {  }))(List);
