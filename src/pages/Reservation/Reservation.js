import React,{useEffect,useState} from 'react';
import {compose} from "redux";
import { Link, withRouter } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import Layout from "../../layout/Layout";
import Shop from "../../components/Card/Shop";
import MapContainer from "../../components/MapContainer";

import LocalLoader from "../../components/PageLoader/LocalLoader";
import {
    nearbyShop,
    barberList,
    serviceList,
    getTimeList,
    savePayment,
    addBooking
} from "../../store/actions/shopActions";
import {useToasts} from "react-toast-notifications";
import SBarber from "../../sections/SBarbers";
import SServices from "../../sections/SServices";
import SCalendar from "../../sections/SCalendar";
import STimes from "../../sections/STimes";
import SPayment from "../../sections/SPayment";
import SFinish from "../../sections/SFinish";
import PageLoader from "../../components/PageLoader/PageLoader";
import AcceptGeo from "../../components/AcceptGeo";


const Reservation = ({
                         auth,
                         nearby : {nearby , isLoading, error},
                         nearbyShop,
                          barberList,
                          barbers : {barbers},
                         serviceList,
                          services : {services},
                         getTimeList,
                           times : {times},
                           savePayment,
                         payment : {key_token},
                          booking : {status},
                          addBooking,
                         cart : {Carts}
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
            return(<PageLoader />)
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


    const [barber__, setBarber__] = useState("")
    const [date__, setDate__] = useState("")
    const [time__, setTime__] = useState("")

  const  detailBarber = (id) => {
        serviceList(id)
      setBarber__(id)
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

   const getserviceDate = (date) => {
        setDate__(date)
        getTimeList({
            date : date,
            barber : barber__
        })
        setState({
            ...state,
            detail : 5
        })

    }

  const  getSelectTime = (time) => {
      setTime__(time)
        setState({
            ...state,
            detail : 6
        })
    }


  const  cardPayment = (data) => {

        savePayment(data)

    }

 useEffect(() => {
         if (key_token !== null){
             setState({
                 ...state,
                 detail : 7
             })
             const book_data = {
                 services : Carts,
                 barber : barber__,
                 date : date__,
                 time : time__,
                 token : key_token
             }
             addBooking(book_data)
         }
 },[key_token,addBooking])


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
    // if (auth.isAuthenticated) if (auth.me.role_id != 1) return <Redirect to={`/dashboard`} />;


    return (
       <>
           { isLoading ? <LocalLoader/>
               :
               <>
                   {state.latitude != null ?
                   <Layout>
                       {state.detail === 1 &&
                            <>
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
                                               detailshop={detailshop}
                                               googleMapURL={state.maptoken}
                                               loadingElement={<div style={{height: `100%`}}/>}
                                               containerElement={<div style={{height: `450px`}}/>}
                                               mapElement={<div style={{height: `100%`, width: "100%"}}/>}
                                           />

                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                                <div className="container">
                                <div className="row">
                                    <div className="offset-lg-3 col-lg-6 mt-3">
                                        <input type="text" className="form-control bg-white"
                                               placeholder="Search your Barber Shop"
                                               onChange={e => handleChange(e)}/>
                                    </div>

                                    <div className="col-lg-12">
                                        <h3 className="mt-3 text-white">Find your Stylist</h3>
                                    </div>
                                    <div className="row">
                                        {searchResults.map((item, k) =>
                                            <div className="col-lg-6" key={k}>
                                                <Shop detailshop={detailshop} item={item}/>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>

                           </>
                       }

                       <div className="container">
                           {state.detail == 2 && <SBarber isLoading={isLoading} barbers={barbers} detailBarber={detailBarber} /> }

                           {state.detail == 3 && <SServices  isLoading={isLoading}  services={services}  available={available} /> }

                           { state.detail == 4 && <SCalendar isLoading={isLoading}  getserviceDate={getserviceDate} />}

                           {state.detail == 5 && <STimes isLoading={isLoading}  times={times}  getSelectTime={getSelectTime} />}

                           {state.detail == 6 && <SPayment isLoading={isLoading}  cardPayment={cardPayment} />}

                           {state.detail == 7 && <SFinish status={status} />}
                       </div>
                   </Layout>
                    : <AcceptGeo />
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
    times : state.time,
    payment : state.payment,
    booking : state.booking,
    cart : state.cart,
});

export default compose(withRouter, connect(mapStateToProps, {nearbyShop,barberList,serviceList,getTimeList,savePayment,addBooking} ))(Reservation);
