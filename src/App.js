import React, { useEffect } from 'react';
import Loader from './components/PageLoader/PageLoader';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import CookieConsent from "react-cookie-consent";
import { logInUserWithOauth, loadMe } from './store/actions/authActions';
import {PrivateRoute} from "./middleware/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound/NotFound";
import Reservation from "./pages/Reservation/Reservation";
import {APP_NAME} from "./base/app";

function App({loadMe,logInUserWithOauth,auth}) {
    useEffect(() => {
        loadMe()
    }, [loadMe]);

    //redosled hookova
    useEffect(() => {
        if (window.location.hash === '#_=_') window.location.hash = '';

        const cookieJwt = Cookies.get('x-auth-cookie');

        if (cookieJwt) {
            Cookies.remove('x-auth-cookie');
            logInUserWithOauth(cookieJwt);
        }
    }, []);

    useEffect(() => {
        if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) {
            loadMe();
        }
    }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);


    return (
        <>
            {auth.appLoaded ? (
                <>
                    <Switch>
                        <Route exact path="/" component={Home} />
                      <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/notfound" component={NotFound} />

                        <PrivateRoute path={`/booking`}  component={Reservation}  isAuthenticated={auth.isAuthenticated} />
                        <Route component={NotFound} />
                    </Switch>

                    <CookieConsent
                        location="bottom"
                        buttonText="Accept !!"
                        cookieName={APP_NAME}
                        debug={true}
                        style={{ background: " rgba(0,0,0,0.58)" , color : "#fff", fontSize: "12px"}}
                        buttonStyle={{ color: "#fff", fontSize: "15px",background : "#2e2e2e" }}
                    >
                        This website uses cookies.
                        We use cookies that help the website to function and also to track how you interact with it.
                        We will only use the cookies if you consent to it by clicking on "Accept".

                    </CookieConsent>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default compose(connect(mapStateToProps, {loadMe,logInUserWithOauth  }))(App);