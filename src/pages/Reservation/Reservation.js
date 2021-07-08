import React,{useEffect,useState} from 'react';
import {compose} from "redux";
import { Link, withRouter } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import Layout from "../../layout/Layout";
import {CSSTransition} from "react-transition-group";
import Barber from "../../components/Card/Barber";
import Shop from "../../components/Card/Shop";
import MapContainer from "../../components/MapContainer";
import {RadioButton, RadioGroup} from "react-radio-buttons";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Service from "../../components/Card/Service";
import LocalLoader from "../../components/PageLoader/LocalLoader";
import {nearbyShop,barberList, serviceList} from "../../store/actions/shopActions";
import {useToasts} from "react-toast-notifications";
import AcceptGeo from "../../components/AcceptGeo";


const Reservation = ({
                         auth,
                         nearby : {nearby , isLoading, error},
                         nearbyShop,
                          barberList,
                          barbers : {barbers},
                         serviceList,
                          services : {services}
                        }) => {
    const { addToast } = useToasts();
    const [state,setState] = useState({
        detail  : 1,
        timeList  : 1,
        choosebooking : "",
        cashpaycolor : "",
        cardpaycolor : "",
        maptoken : `https://maps.googleapis.com/maps/api/js?key=AIzaSyDR5-GEgHP3kHq7bPnMOZJDpe7D8BC9CUM&v=3.exp&libraries=geometry,drawing,places`,
        latitude : null,
        longitude : null,
        userAddress : null
    })


    const [booking,setBooking] = useState({
          user : auth.me.id,
          shop : null,
          barber : null,
          services : [],
       })

    const dispatch = useDispatch()

    useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getLocation)
        }else{
            alert('enabled geolocalisation')
        }

        if (error){
            addToast(error,{appearance : "error"})
        }

    }, [dispatch])


  const  getLocation = (position) => {
        setState({
            ...state,
            latitude : position.coords.latitude,
            longitude : position.coords.longitude
        })

          nearbyShop({
              lat : position.coords.latitude,
              long : position.coords.longitude
          })

  }


  const  detailshop = (id) => {
      barberList(id)
        setState({
            ...state,
            detail : 2
        })
    }

  const  detailBarber = (id) => {
        serviceList(id)
        setState({
            ...state,
            detail : 3
        })

    }

  const  available = () => {
        setState({
            ...state,
            detail : 4
        })

    }



   const getDate = () => {
        setState({
            ...state,
            detail : 5
        })

    }

  const  getSelectTime = () => {
        setState({
            ...state,
            detail : 6
        })
    }

  const   changeColor = () => {
        if (state.choosebooking == ""){
            setState({
                ...state,
                choosebooking : " gold"
            })
        } else{
            setState({
                ...state,
                choosebooking : ""
            })
        }
    }

  const  cardPayment = () => {
        setState({
            ...state,
            detail : 7
        })

        if (state.cardpaycolor == ""){
            setState({
                ...state,
                cardpaycolor : " gold"
            })
        } else{
            setState({
                ...state,
                cardpaycolor : ""
            })
        }
    }

  const  cashpayment = () => {
        setState({
            ...state,
            detail : 8
        })

        if (state.cashpaycolor == ""){
            setState({
                ...state,
                cashpaycolor : " gold"
            })
        } else{
            setState({
                ...state,
                cashpaycolor : ""
            })
        }
    }

   const finishProcesss = () => {
        setState({
            ...state,
            detail : 8
        })
    }




// Search in List

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
        setSearch(e.target.value);
    };


    const filterBythis = (name) => {
        const results = nearby.filter(shops =>
            shops.name.toLowerCase().includes(name.toLowerCase())
        );
        setSearchResults(results);
    }


    useEffect(() => {
        if (nearby){
            const results = nearby.filter(shops =>
                shops.name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [search]);


    return (
       <>
           { isLoading ? <LocalLoader/>
               :
               <>
                   {state.latitude != null ?
                   <Layout>
                       {state.detail < 2 &&
                       <div className="container-fluid">
                           <div className="row">
                               <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                   <div className="ui-block">
                                       <div className="top-header">
                                           <MapContainer
                                               className="__map__box"
                                               isMarkerShown
                                               local={{lat: state.latitude, long: state.longitude}}
                                               nearby={nearby ? nearby : []}
                                               filterBythis={filterBythis}
                                               googleMapURL={state.maptoken}
                                               loadingElement={<div style={{height: `100%`}}/>}
                                               containerElement={<div style={{height: `450px`}}/>}
                                               mapElement={<div style={{height: `100%`, width: "100%"}}/>}
                                           />
                                           <div className="row">
                                               <div className="offset-lg-3 col-lg-6 mt-3">
                                                   <input type="text" className="form-control bg-white"
                                                          placeholder="Search your Barber Shop"
                                                          onChange={e => handleChange(e)}/>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       }

                       <div className="container">
                           {state.detail == 1 &&
                           <div>
                               {searchResults &&
                               <>
                                   <h3 className="mt-3 text-white">Find your Stylist</h3>
                                   <div className="row">
                                       {searchResults.map((item, k) =>
                                           <div className="col-lg-6" key={k}>
                                               <Shop detailshop={detailshop} item={item}/>
                                           </div>)
                                       }
                                   </div>
                               </>
                               }
                           </div>}

                           {state.detail == 2 && <CSSTransition
                               timeout={2000}
                               classNames='fade'
                           >
                               <div className="mt-3">
                                   <br/>
                                   <br/>
                                   <h3 className="mt-3 text-white">Barbers</h3>
                                   <br/>
                               <div className="row h-100"  >
                                   <div className="col-lg-4">
                                       {
                                           isLoading ? <LocalLoader/>
                                               :
                                               <>
                                                   {barbers &&

                                                   <>
                                                       {
                                                           barbers.map((item, k) =>
                                                               <Barber key={k} item={item} detailBarber={detailBarber}/>
                                                           )
                                                       }
                                                   </>
                                                   }

                                               </>
                                       }
                                   </div>
                               </div>
                               </div>
                           </CSSTransition>}

                           {
                               state.detail == 3 &&
                               <div style={{height : "100vh"}}>
                                   <br/>
                                   <br/>
                                   <h3 className="mt-3 text-white">Services</h3>
                                   <div className="row">
                                       <br/>
                                       <br/>
                                       {services &&

                                         <>
                                         {
                                             services.map((item,k) =>

                                             <div className="col-lg-6">
                                             <Service key={k} item={item} />
                                             </div>
                                             )
                                         }
                                         </>
                                       }
                                   </div>
                                   <div className="col-lg-12 text-center" style={{position :   "absolute", bottom : "100px", right : "100px"}}>
                                       <button className="add-to-cart-btn" onClick={available}>Check availability
                                       </button>
                                   </div>
                               </div>
                           }

                           {
                               state.detail == 4 &&
                               <CSSTransition
                                   timeout={300}
                                   classNames="alert"
                               >
                                   <div className="col-lg-12">
                                       <FullCalendar
                                           defaultView="dayGridMonth"
                                           header={{
                                               left: "prev,next today",
                                               center: "title",
                                               right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                           }}
                                           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                           weekends={true}
                                           dateClick={getDate}
                                       />

                                   </div>
                               </CSSTransition>
                           }

                           {
                               state.detail == 5 &&
                               <div>
                                   <RadioGroup className="row mt-5" onChange={getSelectTime} horizontal>
                                       <RadioButton value="9" className="col-lg-6" name="fruit">
                                           9:00
                                       </RadioButton>
                                       <RadioButton value="10" className="col-lg-6" name="fruit">
                                           10:00
                                       </RadioButton>
                                   </RadioGroup>
                                   <RadioGroup className="row mt-5" onChange={getSelectTime} horizontal>
                                       <RadioButton value="11" className="col-lg-6" name="fruit">
                                           11:00
                                       </RadioButton>
                                       <RadioButton value="12" className="col-lg-6" name="fruit">
                                           12:00
                                       </RadioButton>
                                   </RadioGroup>
                                   <RadioGroup className="row mt-5" onChange={getSelectTime} horizontal>
                                       <RadioButton value="13" className="col-lg-6" name="fruit">
                                           13:00
                                       </RadioButton>
                                       <RadioButton value="14" className="col-lg-6" name="fruit">
                                           14:00
                                       </RadioButton>
                                   </RadioGroup>
                               </div>
                           }

                           {state.detail == 6 && <div className="row box-content">
                               <div className="col-lg-12">
                                   <h3>Payment Method</h3>
                               </div>
                               <div className="col-lg-12">
                                   <hr/>
                                   <h4>Confirm Booking</h4>
                                   <br/>
                                   <div style={{marginBottom: "10px"}}>
                                       <div
                                           className={`step__list confirm__booking __pay__element` + state.choosebooking}
                                           onClick={changeColor}>
                                           <div className="row">
                                               <div className="col-lg-9">
                                                   <h6>Adult Haircut</h6>
                                                   <p>25th May 2021 super <br/>
                                                       <small>09:00</small>
                                                   </p>

                                               </div>
                                               <div className="col-lg-3 step__list__service">
                                                   <div className="step__list__price">
                                                       £25.0
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <br/>
                                   <br/>

                                   <h4>Select Payment Option</h4>
                                   <div className="row box-content">
                                       <div className="col-lg-6">
                                           <div className={`confirm__booking __pay__element`} onClick={cashpayment}>
                                               <div className="row">
                                                   <div className="col-lg-7">
                                                       Cash payment
                                                   </div>
                                                   <div className="col-lg-3">
                                                       <h4>£25.00</h4>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-6">
                                           <div className={`confirm__booking __pay__element`} onClick={cardPayment}>
                                               <div className="row">
                                                   <div className="col-lg-7">
                                                       Card payment
                                                   </div>
                                                   <div className="col-lg-3">
                                                       <h4>£25.00</h4>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>}

                           {state.detail == 7 && <div>
                               <div className="col-lg-12">
                                   <h3>Card Details</h3>
                               </div>
                               <div className="col-lg-12">
                                   <hr/>
                                   <form action="">
                                       <div className="row">
                                           <div className="col-lg-12">
                                               <input type="text" className="custom__input" placeholder="Name on Card"/>
                                           </div>
                                           <div className="col-lg-12">
                                               <input type="text" className="custom__input" placeholder="Card Number"/>
                                           </div>
                                           <div className="col-lg-6">
                                               <input type="month" className="custom__input" placeholder=""/>
                                           </div>
                                           <div className="col-lg-6">
                                               <input type="number" className="custom__input" placeholder="123"/>
                                           </div>

                                           <div className="col-lg-12">
                                               <br/>
                                               <label className="f-radio">Select to save card
                                                   <input type="checkbox" name="squareradio"/>
                                                   <span className="square"></span>
                                               </label>
                                           </div>

                                       </div>

                                       <div className="offset-lg-4 col-lg-4">
                                           <button className="fabl fabl-block gold" onClick={finishProcesss}>Proceed
                                           </button>
                                       </div>
                                   </form>
                               </div>
                           </div>}

                           {state.detail == 8 && <div className="form-group text-center">
                               <h5>Thank you for completing your booking</h5>
                               <br/>
                               <br/>
                               <p className="success__icon"><i className="fa fa-check"></i></p>
                               <br/>
                               <h5 className="text-center">
                                   Your Completion has been successful <br/>
                                   A confirmation email <br/>
                                   Be <br/>
                                   Sent shortly
                               </h5>
                           </div>}
                       </div>
                   </Layout>
                       : <LocalLoader />
                   }
               </>
           }
           </>
    );
};

const mapStateToProps = (state) => ({
    auth : state.auth,
    nearby : state.nearby,
    barbers : state.barber,
    services : state.services,
});

export default compose(withRouter, connect(mapStateToProps, {nearbyShop,barberList,serviceList} ))(Reservation);
