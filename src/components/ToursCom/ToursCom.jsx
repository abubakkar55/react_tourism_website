import React from 'react'
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';

const ToursCom = () => {
    const { mongodb: { tourData } } = useFirebaseMongo();
    return (
        <div>
            {tourData.length}
        </div>
    )
}

export default ToursCom
