import React , {useEffect} from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { loginUserWithEmail } from '../../store/actions/authActions';
import   "./style.css";

import { loginSchema } from '../../components/Validate/validation';
import {APP_NAME} from "../../base/app";
import {useToasts} from "react-toast-notifications";
const Login = ({ auth, history, loginUserWithEmail }) => {

    const { addToast } = useToasts();
    const { error } = auth

    useEffect(() => {
        document.title = APP_NAME+" - Login"
    });

    useEffect(() => {
        if (error) {
            addToast(error,{appearance : "error"})
        }
    }, [error]);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginUserWithEmail(values, history);
        },
    });



    if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
     <>
         <div className="d-lg-flex half">
             <div className="bg order-1 order-md-2" style= {{backgroundImage : `url(img/bg_1.jpg)`}}></div>
             <div className="contents order-2 order-md-1 bg-dark text-white" >
                 <div className="container">
                     <div className="row align-items-center justify-content-center">
                         <div className="col-md-9">
                             <h1><strong className="text-white">Log In</strong></h1>
                             <p className="mb-4 text-white">Access to your booking page by authentification or <Link to="register" className="text-gold">create new account</Link>
                             </p>
                             <form onSubmit={formik.handleSubmit}>
                                 <div className="form-group">
                                     <label className="mb-1">Email</label>
                                     <div className="position-relative icon-form-control">
                                         <i className="mdi mdi-account position-absolute"></i>
                                         <input
                                             placeholder="Email address"
                                             name="email"
                                             className="form-control"
                                             type="email"
                                             style={{background : "#fff"}}
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.email}
                                             required
                                         />
                                     </div>
                                     {formik.touched.email && formik.errors.email ? (
                                         <small className="text-danger"></small>
                                     ) : null}
                                 </div>
                                 <div className="form-group">
                                     <label className="mb-1">Password</label>
                                     <div className="position-relative icon-form-control">
                                         <i className="mdi mdi-key-variant position-absolute"></i>
                                         <input
                                             style={{background : "#fff"}}
                                             placeholder="Password"
                                             name="password"
                                             type="password"
                                             className="form-control"
                                             onChange={formik.handleChange}
                                             onBlur={formik.handleBlur}
                                             value={formik.values.password}
                                              required
                                         />
                                     </div>
                                     {formik.touched.password && formik.errors.password ? (
                                         <small className="text-danger"></small>
                                     ) : null}
                                 </div>
                                 <div className="custom-control custom-checkbox mb-3">
                                     <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                 </div>


                                 <button className="btn gold btn-block text-uppercase"
                                         disabled={auth.isLoading}
                                         type="submit"
                                 >
                                     {auth.isLoading ?
                                    <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> :
                                         <span>Sign In</span>
                                     }


                                 </button>

                             </form>
                             <br/>
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
  errors: state.errors,
});

export default compose(withRouter, connect(mapStateToProps, { loginUserWithEmail }))(Login);
