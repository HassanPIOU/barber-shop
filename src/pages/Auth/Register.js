import React, {useState,useEffect} from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { registerUserWithEmail } from '../../store/actions/registerActions';
import { getShop } from '../../store/actions/shopActions';

import {APP_NAME} from "../../base/app";
import {CSSTransition} from "react-transition-group";
const Register = ({
                      auth,
                      register: { isLoading, error },
                      history,
                      registerUserWithEmail,
                      getShop,
                    shop : {shop}
                  }) => {


    const [hasshop,setHasshop] = useState(1)



    const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [password2,setPassword2] = useState('')
  const [shop_choose,setShop_choose] = useState('')
  const [shop_name,setShop_name] = useState('')

 const [passworderror,setPassworderror] = useState("")

    const comparetoPassword = (value) => {
      if (value != password){
          setPassworderror("same")
      }else{
          setPassworderror("")
      }
    }

    useEffect(() => {
        document.title = APP_NAME+" - Register"
        getShop()
    },[getShop]);

    useEffect(() => {
        if (error) {

        }
    }, [error]);


    const [inProp, setInProp] = useState(false);

    const HandleToggleShop = (value) => {
        if (value == 1){
            setInProp(true)
            setHasshop(2)
        } else{
            setHasshop(1)
            setInProp(false)
        }
    }


   const onSubmit=e=> {
        e.preventDefault();
        if (passworderror != ""){

        } else{
            const newUser={
                first_name : firstname ,
                last_name : lastname ,
                phone: phone,
                email: email,
                password: password,
                confirm_password: password2,
                shop_name : shop_name,
                choosen_shop : shop_choose
            };
            registerUserWithEmail(newUser,history);
        }
    }




  if (auth.isAuthenticated) return <Redirect to="/" />;

  return (
      <div className="d-lg-flex half">
          <div className="contents order-2 order-md-1" style={{width : "50%"}}>
              <div className="container">
                  <div className="row align-items-center justify-content-center bg-dark text-white">
                      <div className="col-md-9">
                          <h1 className="text-white"><strong>Register</strong></h1>
                          <br/>
                                 <form   onSubmit={onSubmit}>

                                     <div className="d-flex mb-5 align-items-center">
                                         <label className="control  mb-0"><span className="caption">i'm a shop</span>
                                             <input type="checkbox"
                                                    value={hasshop}
                                                    onChange={ e => HandleToggleShop(e.target.value)}
                                             />
                                             <div className="control__indicator"></div>
                                         </label>
                                     </div>

                                  <div className="form-row">
                                      <div className="col">
                                          <div className="form-group">
                                              <label className="mb-1">Firstname</label>
                                              <div className="position-relative icon-form-control">
                                                  <i className="mdi mdi-account position-absolute"></i>
                                                  <input type="text" className="form-control"
                                                         value={firstname}
                                                         onChange={e => setFirstname(e.target.value)}
                                                         style={{background : "#fff"}}
                                                         required
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col">
                                          <div className="form-group">
                                              <label className="mb-1">Lastname</label>
                                              <div className="position-relative">
                                                  <input type="text" className="form-control" value={lastname}
                                                         onChange={e => setLastname(e.target.value)}   style={{background : "#fff"}} required  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                     <div className="row">
                                         <div className="form-group col-lg-6">
                                             <label className="mb-1">Email</label>
                                             <div className="position-relative icon-form-control">
                                                 <i className="mdi mdi-email-outline position-absolute"></i>
                                                 <input type="email" className="form-control"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        style={{background : "#fff"}}
                                                        required
                                                 />
                                             </div>
                                         </div>
                                         <div className="form-group col-lg-6">
                                             <label className="mb-1">Phone number </label>
                                             <div className="position-relative icon-form-control">
                                                 <i className="mdi mdi-email-outline position-absolute"></i>
                                                 <input type="text" className="form-control"
                                                        value={phone}
                                                        onChange={e => setPhone(e.target.value)}
                                                        style={{background : "#fff"}}
                                                        required
                                                 />
                                             </div>
                                         </div>
                                     </div>


                                     {hasshop == 2 &&
                                     <CSSTransition  timeout={200} classNames="fade">
                                     <>
                                         {shop.length > 0 &&
                                         <>
                                             <small>If you are a shop owner , you can register your shop name by enter
                                                 the name in this input</small>
                                             <br/>
                                             <br/>
                                         </>
                                         }


                                         <div className="row">
                                             {shop.length > 0 &&
                                             <>
                                                 <div className="form-group col-lg-6">
                                                     <label htmlFor="">Your Shop</label>
                                                     <select name="shop_choose" id="" className="form-control"
                                                             onChange={e => setShop_choose(e.target.value)} style={{height : "45px"}}>
                                                         <option disabled selected >--Choose--</option>
                                                         {shop.map((item,k) => <option value={item.id}>A</option>)}
                                                     </select>
                                                 </div>
                                             </>
                                             }

                                             <div className={`form-group ${shop.length > 0 ? "col-lg-6" : "col-lg-12"}`}>
                                                 <label htmlFor="">Shop name</label>
                                                 <input type="text"
                                                        className="form-control"
                                                        placeholder="My shop name"
                                                        name="shop_name"
                                                        onChange={e => setShop_name(e.target.value)}
                                                 />
                                             </div>
                                         </div>

                                         <br/>

                                     </>
                                     </CSSTransition>
                                     }

                                     <div className="row">
                                         <div className="form-group col-lg-6" >
                                             <label className="mb-1">Password</label>
                                             <div className="position-relative icon-form-control">
                                                 <i className="mdi mdi-key-variant position-absolute"></i>
                                                 <input
                                                     type="password"
                                                     className="form-control"
                                                     value={password}
                                                     onChange={e => setPassword(e.target.value)}
                                                     style={{background : "#fff"}}
                                                     minLength="6"
                                                     required
                                                 />
                                             </div>
                                         </div>
                                         <div className="form-group col-lg-6">
                                             <label className="mb-1">Confirmation</label>
                                             <div className="position-relative icon-form-control">
                                                 <i className="mdi mdi-key-variant position-absolute"></i>
                                                 <input
                                                     type="password"
                                                     className={passworderror != "" ? "form-control is-invalid" : "form-control"}
                                                     value={password2}
                                                     minLength="6"
                                                     onChange={e => setPassword2(e.target.value)}
                                                     onKeyUp={e => comparetoPassword(e.target.value)}
                                                     style={{background : "#fff"}}
                                                     required
                                                 />
                                             </div>
                                         </div>
                                     </div>

                                  <div className="text-danger">{passworderror}</div>

                                  <small className="form-group">
                                      <label className="mb-1">You agree to {APP_NAME} <a href="#" className="text-gold">User Agreement</a>, <a
                                          href="#" className="text-gold">Privacy Policy</a>, and <a href="#" className="text-gold">Cookie Policy</a>.</label>
                                  </small>

                                     <br/>
                                     <br/>
                                  <button className="btn  gold  text-uppercase" type="submit" disabled={isLoading}>
                                      {isLoading ?
                                          <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</>
                                          : <span> Register</span>
                                      }</button>

                                     <span className="pull-right pt-2">
                               <small>
                                    I already have account , <Link to="login"  className="justify-content-center text-gold">SignIn</Link>
                               </small>
                             </span>

                              </form>

                      </div>
                  </div>
              </div>
          </div>
          <div className="bg order-1 order-md-2" style= {{backgroundImage : `url(img/bg_1.jpg)`,width : "50%"}}></div>
      </div>

  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  register: state.register,
  shop: state.shop,
});

export default compose(withRouter, connect(mapStateToProps, { registerUserWithEmail,getShop }))(Register);
