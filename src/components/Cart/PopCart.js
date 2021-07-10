import React from 'react'
import    './cart.css';
import {DeleteCart} from "../../store/actions/cartActions";
import {connect} from 'react-redux';
const PopCart = ({cart : {Carts, numberCart},DeleteCart}) => {

    let ListCart = [];
    let TotalCart=0;
    Object.keys(Carts).forEach(function(item){
        TotalCart+=Carts[item].quantity * Carts[item].price;
        ListCart.push(Carts[item]);
    });



    return(
       <>
           {Carts.length > 0 &&
           <div className="shopping-cart">
               <div className="shopping-cart-header">
                   <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">{numberCart}</span>
                   <div className="shopping-cart-total">
                       <span className="lighter-text">Total:</span>
                       <span className="main-color-text">£ {TotalCart}</span>
                   </div>
               </div>

               <ul className="shopping-cart-items">
                   {
                       ListCart.map((item,k) =>
                           <li className="clearfix" key={k}>
                           <span className="item-name">{item.name}</span>
                           <span className="item-price">£ {item.price}</span>
                           <span className="item-quantity pull-right">Qty : {item.quantity}</span>
                               <span className="item-delete" onClick={() => DeleteCart(k)}><i className="fa fa-close"></i></span>

                           </li> )
                   }

               </ul>
           </div>
           }

     </>
    )
}

const mapStateToProps = (state) => ({
    cart : state.cart,
});


export default connect(mapStateToProps,{DeleteCart})(PopCart)
