import React , {useState,useEffect} from 'react'
import Service from "../components/Card/Service";
import Empty from "../components/Empty";
import JustLoading from "../components/PageLoader/JustLoading";
import PopCart from "../components/Cart/PopCart";
import {connect} from 'react-redux';


const SServices = ({services,available,cart : {Carts}}) => {



    return(
        <>
            {services ?
                  <div style={{height : "100%"}}>
                <br/>
                <br/>
                <h3 className="mt-3 text-white">Services</h3>
                      <PopCart  />
                <div className="row">
                    <br/>
                    <br/>
                    { services ?
                            <>
                            {
                                services.length > 0
                                ?
                                    <>
                                        {
                                            services.map((item,k) =>

                                                <div className="col-lg-6" key={k}>
                                                    <Service  item={item}    />
                                                </div>
                                            )
                                        }
                                    </> : <Empty item="Service"/>
                            }
                            </> :

                            <JustLoading />
                    }
                </div>
                      {services.length > 0 &&
                      <>
                      {
                          Carts.length > 0 &&
                          <div className="col-lg-12 text-center mt-5">
                              <button className="add-to-cart-btn" onClick={available}>Check availability
                              </button>
                          </div>
                      }
                      </>
                      }
            </div> :

                <JustLoading />

            }
        </>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart,
});


export default connect(mapStateToProps,{})(SServices)
