import React from 'react'
import { useParams } from 'react-router'

const TourDetails = () => {
const {id} = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default TourDetails
