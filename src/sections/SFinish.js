import React from 'react'
import SendLoading from "../components/PageLoader/SendLoading";
import {Link} from "react-router-dom";

const SFinish = ({status}) => {
    return(
       <>
           {
               status ?
                   <div className="container" >
                       <div className="row" style={{height : "100vh"}}>
                           <div className=" offset-lg-3 col-lg-6 padding-100">
                               <div className="form-group text-center text-white  round_box">
                                   <h5 className="text-white">Thank you for completing your booking</h5>
                                   <br/>
                                   <br/>
                                   <p className="success__icon text-white"><i className="fa fa-check"></i></p>
                                   <br/>
                                   <h5 className="text-center text-white">
                                       Your Completion has been successful <br/>
                                       A confirmation email <br/>
                                       Be <br/>
                                       Sent shortly
                                   </h5>
                                   <Link className="btn gold btn-block" to="historic">See Historic</Link>
                               </div>
                           </div>
                       </div>
                   </div>

                   : <SendLoading />
           }
      </>
    )
}



export default SFinish