import React from 'react';
import './TourCom.css';
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';
import { AccessTime, StarBorderOutlined, Star } from "@material-ui/icons"
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
const ToursCom = () => {
    const { mongodb: { tourData } } = useFirebaseMongo();
    return (
        <div className="container mx-auto p-10">
            <h3 className="text-center text-4xl font-medium mb-10">Our Tour packages </h3>
            <div className="grid md:grid-cols-3 gap-x-5 gap-y-10">

                {tourData.map(item => {
                    const { _id, image, name, country, price, rating, review, duration, description } = item
                    return (
                        <div className="tour-item relative p-3 shadow rounded-md hover:shadow-lg">
                            <img className="w-full h-48 rounded-md" src={image} alt={name} />
                            <button className="absolute top-12 left-7 px-4 rounded-full py-1  bg-puerto-500 text-white">${price} </button>
                            <div className="p-3">
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <h3 className="font-medium text-lg text-gray-600">{name} </h3>
                                            <span className="text-sm text-gray-500">{country} </span>
                                        </div>
                                        <button className="px-3 rounded-full py-1  bg-puerto-500 text-white">
                                            <NavLink to={`/tour_details/${_id}`}>
                                                Order Now
                                            </NavLink>
                                        </button>
                                    </div>
                                    <p className="mb-2">{description?.slice(0, 60)}... </p>

                                </div>
                                <div className="flex items-center justify-between">
                                    <span>
                                        <Rating
                                            className="text-yellow-400"
                                            initialRating={rating}
                                            emptySymbol={<StarBorderOutlined />}
                                            fullSymbol={<Star />}
                                            readonly
                                        />
                                        <span>
                                            ({review} review)
                                        </span>

                                    </span>
                                    <span className="font-medium"><AccessTime className="text-crimson-600" style={{ transform: "scale(.80)" }} />   {duration} {duration > 1 ? "days" : "day"}  </span>
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
