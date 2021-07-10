import React from 'react'
import  JustLoading from "../components/PageLoader/JustLoading";
import {CSSTransition} from "react-transition-group";
import Barber from "../components/Card/Barber";

const SBarber = (props) => {

  const   barbers = props.barbers
   const  detailBarber = props.detailBarber

    return(
        <>
            {barbers ?
                 <CSSTransition
                timeout={2000}
                classNames='fade'
            >
                <div className="mt-3">
                    <br/>
                    <br/>
                    <h3 className="mt-3 text-white">Barbers</h3>
                    <br/>
                    <div className="row"  >

                                            {
                                                barbers.map((item, k) =>
                                                    <Barber key={k} item={item} detailBarber={() => detailBarber(item.id)}/>
                                                )
                                            }

                    </div>
                </div>
            </CSSTransition>
                : <JustLoading />
            }
            </>
    )
}

export default SBarber