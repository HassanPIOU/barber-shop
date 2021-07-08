import React from 'react'
import './service.css'
const Service = (props) => {
const item = props.item
const addService = props.addService
    return(
             <>
                 <div className='custom-card'>
                     <img
                         src='img/service.jpg' />
                         <div className='card-body'>
                             <div className='card-text'>
                                 <h3>{item.name}</h3>
                                 <p>
                                    Price : <b >{item.price}</b>
                                     <button className="pull-right"><i className="fa fa-plus" onClick={e => addService(item.id)}></i></button>
                                 </p>
                             </div>

                         </div>
                 </div>
            </>
    )
}

export default Service