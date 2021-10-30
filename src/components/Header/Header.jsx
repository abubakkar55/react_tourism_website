import React from 'react'
import "./Header.css";
import { NavLink } from 'react-router-dom';
import logo from "../../images/flight.png";
import { ExitToApp } from "@material-ui/icons";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';

const Header = () => {
    const { firebase: { firebaseData, logOut } } = useFirebaseMongo();
    return (
        <div className="shadow-md">
            <div className="h-20 container mx-auto flex justify-between items-center">
                <div>
                    <NavLink className="flex items-center" to="/">
                        <img className="w-12" src={logo} alt="logo" />
                        <span className="ml-2 font-semibold text-lg">ABTourism </span>
                    </NavLink>
                </div>
                <div>
                    <nav>
                        <ul className="flex items-center gap-7">
                            <li className="hover:text-puerto-500">
                                <NavLink activeClassName="font-semibold" to="/">Home </NavLink>
                            </li>
                            <li className="hover:text-puerto-500">
                                <NavLink activeClassName="font-semibold" to="/tour">Tours </NavLink>
                            </li>
                            <li className="hover:text-puerto-500">
                                <NavLink activeClassName="font-semibold" to="/destination">Destination </NavLink>
                            </li>

                            {
                                firebaseData?.email &&
                                <>
                                    <li className="hover:text-puerto-500">
                                        <NavLink activeClassName="font-semibold" to="/my_orders">My Orders </NavLink>
                                    </li>
                                    <li className="hover:text-puerto-500">
                                        <NavLink activeClassName="font-semibold" to="/manage_all_orders">Manage All Orders </NavLink>
                                    </li>

                                    <li className="hover:text-puerto-500">
                                        <NavLink activeClassName="font-semibold" to="/manage_all_orders">Add a Tour </NavLink>
                                    </li>
                                </>
                            }

                        </ul>
                    </nav>
                </div>
                <div>
                    <ul className="flex items-center gap-5">

                        {
                            firebaseData?.email ?
                                <>
                                <span>{firebaseData?.displayName} </span>
                                    <img className="w-12 h-12 rounded-full" src={firebaseData?.photoURL} alt="profile" />
                                    <li onClick={logOut} className="hover:text-puerto-500">
                                        <NavLink to="/"> <ExitToApp className="log-out" /> </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="hover:text-puerto-500 px-6 py-1.5 border-2 border-puerto-500 rounded-full">
                                        <NavLink activeClassName="font-medium" to="/login">Login </NavLink>
                                    </li>

                                    <li className="hover:bg-crimson-600 px-6 py-2 text-white bg-puerto-500 rounded-full">
                                        <NavLink activeClassName="font-medium" to="/signup">Register </NavLink>
                                    </li>
                                </>
                        }



                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
