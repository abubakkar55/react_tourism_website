import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { firebase: { firebaseData: { displayName } } } = useFirebaseMongo();
    useEffect(() => {
        axios.get(`https://safe-headland-90262.herokuapp.com/own_orders?emailName=${displayName}`)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [displayName]);


    const handleDelete = (id) => {
        const confirmation = window.confirm("are you really wanna delete?");
        if (confirmation) {
            axios.delete(`https://safe-headland-90262.herokuapp.com/${id}`)
                .then(res => {
                    if (res.statusText === "OK") {
                        alert("Deleted successfully");
                    }
                    const remainingData = myOrders.filter(item => item._id !== id);
                    setMyOrders(remainingData);
                });
        } else {
            alert("tnq to response us");
        }
    }


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
                                <button onClick={() => handleDelete(item?._id)} className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyOrders
