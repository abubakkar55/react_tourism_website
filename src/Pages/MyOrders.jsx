import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { firebase: { firebaseData: { email } } } = useFirebaseMongo();
    useEffect(() => {
        axios.get(`https://safe-headland-90262.herokuapp.com/my_orders?email=${email}`)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [email]);


    return (

        <div className="container mx-auto p-12">
            <div>

                {
                    myOrders.map(item => {
                        return (

                            <div key={item._id} className="flex items-center justify-between shadow-md rounded-md px-8 py-5 mb-10">
                                <img className="w-36 h-20 rounded-md" src={item?.image} alt="" />
                                <h3>Tour Name:  {item?.name} </h3>
                                <h3>Email:  {item?.email} </h3>
                                <h3>Phone:  {item?.phone} </h3>
                                <h3>Price:  ${item?.price} </h3>
                                <button  className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyOrders
