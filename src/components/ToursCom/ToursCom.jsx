import React from 'react'
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
import { AccessTime, StarBorderOutlined, Star } from "@material-ui/icons"
import Rating from 'react-rating';
const ToursCom = () => {
    const { mongodb: { tourData } } = useFirebaseMongo();
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6">

                {tourData.map(item => {
                    const { image, name, country, price, rating, review, duration, description } = item
                    return (
                        <div className="relative">
                            <img src={image} alt={name} />
                            <button>{price} </button>
                            <div className="p-5">
                                <div>
                                    <div>
                                        <h3>{name} </h3>
                                        <span>{country} </span>
                                        <p>{description.slice(15)}... </p>
                                    </div>
                                    <button>
                                        Add to cart
                                    </button>

                                </div>
                                <div>
                                    <span>
                                     
                                        <Rating
                                            initialRating={rating}
                                            emptySymbol={<StarBorderOutlined/>}
                                            fullSymbol={<Star/>}
                                            readonly
                                        />
                                     
                                        <span>
                                         ({review} review)
                                        </span>
                                     
                                        </span>
                                    <span><AccessTime />  {duration} </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToursCom
