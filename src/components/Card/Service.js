import React from 'react'
import './service.css'
import {AddCart} from "../../store/actions/cartActions";
import {compose} from "redux";
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";
const Service = (props) => {
const item = props.item

    return(
             <>
                 <div className='custom-card'>
                     <img
                         src='img/service.jpg' />
                         <div className='card-body'>
                             <div className='card-text'>
                                 <h3>{item.name}</h3>
                                 <button className="pull-right gold text-white"><i className="fa fa-plus" onClick={() => props.AddCart(item)}></i></button>
                                 <p>
                                    Price : <br/>
                                     <h1 style={{color : "#D8B438"}}>£ {item.price}</h1>
                                 </p>
                             </div>

                         </div>
                 </div>
            </>
    )
}

const mapStateToProps = (state) => ({

});

function mapDispatchToProps(dispatch){
    return{
        AddCart:cart=>dispatch(AddCart(cart))

    }
}

export default compose(withRouter, connect(mapDispatchToProps, {AddCart} ))(Service);
