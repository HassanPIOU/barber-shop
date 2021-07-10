import React from 'react'

const SBarber = (props) => {

    const   item = props.item


    return(
        <>
            <p className="empty__box">
                No {item}  found

            </p>
        </>
    )
}

export default SBarber