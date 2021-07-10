import React from 'react'
import {RadioButton, RadioGroup} from "react-radio-buttons";
import JustLoading from "../components/PageLoader/JustLoading";


const STimes = (props) => {

 const    getSelectTime = props.getSelectTime
    const times = props.times
    return(
        <>
            <div className="container padding-100">
                <div style={{height : "75vh"}}>
                     <div className="container custom-padding">
                         <h3 className="mt-3 text-white">Select your Time</h3>
                         <div className="row">

                             {
                                 times   ?

                                     <>
                                         {
                                             times.map((item,k) =>
                                                 <div className="col-lg-6" key={k}>
                                                 <RadioButton value={item.time} className="" name="radio"
                                                              onChange={e  => getSelectTime(item.time)}>
                                                     {item.time}
                                                 </RadioButton>
                                             </div>)
                                         }
                                     </>

                                     :

                                     <JustLoading />
                             }

                           </div>

                     </div>
                </div>
            </div>
        </>
    )
}

export default STimes