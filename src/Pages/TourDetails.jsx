import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const TourDetails = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const [data, setData] = useState({});
    const { firebase: { firebaseData } } = useFirebaseMongo();
    const { email, displayName } = firebaseData;
    const { name, image, price, description, country } = data;

    const onSubmitFunction = (userData) => {
        const { city, address, phone } = userData;
        const all_info = { image, email, name, price, city, address, phone, displayName };
        axios.post("https://infinite-forest-12039.herokuapp.com/add_a_collection", all_info)
            .then(res => {
                alert("added");
            }).finally(() => {
                reset();
            });
    }

    useEffect(() => {
        axios.get(`https://infinite-forest-12039.herokuapp.com/signle_pd/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
    }, [id])


    return (
        <div className="container mx-auto py-24 px-6">

            <div className="flex items-center gap-10">
                <div className="w-1/2">
                    <img className="w-full h-72 rounded-md mb-4" src={image} alt="" />
                    <h3 className="text-4xl font-semibold"> {name} </h3>
                    <h3 className="text-lg text-gray-500 mb-3"> {country} </h3>
                    <p className="pr-20 ">{description} </p>
                </div>

                <div className="w-1/2 my-20 mx-auto">
                    <div className="bg-white  rounded-md overflow-hidden shadow-md">
                        <h3 className="text-center text-crimson-500 text-2xl mt-8 font-bold">Add Your Information</h3>
                        <div>
                            <div className="p-8">
                                <form onSubmit={handleSubmit(onSubmitFunction)}>
                                    <input
                                        {...register("city", {
                                        })}
                                        className={`border-2 ${errors.city && "border-red-400"}  rounded block w-full px-4 py-3   outline-none`}
                                        type="text" placeholder="city name"
                                    />
                                    {
                                        errors.city && (<small className="text-red-500">{errors.city.message} </small>)
                                    }

                                    <input
                                        {...register("address", {
                                            required: 'address is Required',
                                        })}
                                        className={`border-2 ${errors.address && "border-red-400"} rounded block  w-full px-4 py-3 mt-3 outline-none`} type="text" placeholder="address" />
                                    {
                                        errors.address && (<small className="text-red-500">{errors.address.message} </small>)
                                    }
                                    <input
                                        {...register("phone", {
                                            required: 'phone is Required',
                                        })}
                                        className={`border-2 ${errors.phone && "border-red-400"} rounded block  w-full px-4 py-3 mt-3 outline-none`} type="text" placeholder="phone" />
                                    {
                                        errors.phone && (<small className="text-red-500">{errors.phone.message} </small>)
                                    }

                                    <button type="submit" className="mt-4 px-8 mr-2 py-2 rounded-3xl bg-puerto-500 hover:bg-puerto-500  text-white shadow-lg">Order Now </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TourDetails
