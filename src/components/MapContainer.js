import React from 'react'
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";



const MapContainer = withScriptjs(withGoogleMap((props) => {

    const nearby = props.nearby
    const filterBythis = props.filterBythis




    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: props.local.lat, lng: props.local.long }}
        >
            {props.isMarkerShown &&
            <Marker position={{ lat: props.local.lat, lng: props.local.long }}>
                    <InfoWindow >
                        <strong >My position</strong>
                    </InfoWindow>
            </Marker>
                }

            {
               nearby.length > 0 &&

               nearby.map((item,k) =>
                   <Marker key={k} position={{ lat: parseFloat(item.lat), lng: parseFloat(item.long) }}
                    onClick={e => filterBythis(item.name)}
                   >
                       <InfoWindow >
                           <strong >{item.name}</strong>
                       </InfoWindow>
                   </Marker>

               )

            }

        </GoogleMap>
    )
}

))

export default MapContainer
// export default GoogleApiWrapper({
//     apiKey: ("500036472570-14hpfoim6lmb90le4um5gbfig5qeiqms.apps.googleusercontent.com")
// })(MapContainer)