import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import {CSSTransition} from "react-transition-group";


const SCalendar = (props) => {

    const isLoading = props.isLoading
    const getserviceDate = props.getserviceDate

    return(
        <>
            <div className="container custom-padding">
                <div className="container padding-50">
                    <h3 className="mt-3 text-white">Select your Availability</h3>
                    <CSSTransition
                        timeout={300}
                        classNames="alert"
                    >
                        <div className="col-lg-12 text-gold" style={{color : "#D8B438"}}>
                            <FullCalendar
                                defaultView="timeGridDay"
                                header={{
                                    center: "title",
                                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                                }}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                weekends={true}
                                dateClick={e => getserviceDate(e.dateStr)}

                            />
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </>
    )
}

export default SCalendar