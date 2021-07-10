import React,{useState,useEffect} from 'react'

import {STRIPE__SECRET_KEY_SANDBOX,STRIPE_PUBLIC_KEY_SANDBOX} from "../base/app";
import StripeCheckout from "react-stripe-checkout";
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import JustLoading from "../components/PageLoader/JustLoading";


const SPayment = ({cardPayment,carts : {Carts}}) => {

    let TotalCart=0;
    Object.keys(Carts).forEach(function(item){
        TotalCart+=Carts[item].quantity * Carts[item].price;
    });

    const handleToken = (payment) =>{
         cardPayment({
                 payment,
                 total : TotalCart
             })
    }

    return(
        <>
            <div className='container mt-5'>
                <div className='window'>
                    <div className='order-info'>
                        <div className='order-info-content'>
                            <br/>
                            <h2>Checkout</h2>
                            <div className='line'></div>

                            {
                                Carts ?
                                 <>
                                     {Carts.map((item,k) =>

                                         <div key={k}>
                                             <table className='order-table'>
                                                 <tbody>
                                                 <tr>
                                                     <td>
                                                         <img src='img/icon.png'
                                                              className='full-width' />
                                                     </td>
                                                     <td>
                                                         <br /> <span className='thin'>{item.name}</span>
                                                         <br /> Price : £ {item.price} x  {item.quantity}<br />
                                                     </td>

                                                 </tr>
                                                 <tr>
                                                     <td>
                                                         <div className='price'><b>£ {item.price * item.quantity }</b></div>
                                                     </td>
                                                 </tr>
                                                 </tbody>

                                             </table>
                                             <div className='line'></div>
                                         </div>
                                     )
                                     }
                                 </> : <JustLoading />
                            }

                        </div>
                    </div>
                    <div className='credit-info'>
                        <div className='credit-info-content'>
                                <h1 className="pricereview">£ {TotalCart}</h1>

                            <StripeCheckout
                                stripeKey={STRIPE_PUBLIC_KEY_SANDBOX}
                                token={handleToken}
                                amount={TotalCart * 100}
                                name="Haircut 1"
                                className='pay-btn'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    carts : state.cart,

});

export default compose(withRouter, connect(mapStateToProps, ))(SPayment);
