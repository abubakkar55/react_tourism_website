import React from 'react';
import { Facebook } from "@material-ui/icons/"
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';

const Signup = () => {

    const { firebase: { googleSignIn, setSEmail, setSName, setSPass, registerUser, firebaseErrors, setFirebaseData, setFirebaseErrors, updateUser, setLoading } } = useFirebaseMongo();

    const navigate = useNavigate();

    const handleGoogleSignIn = (e) => {
        googleSignIn()
            .then(res => {
                setFirebaseData(res.user);
                navigate("/");
            })
            .catch(error => {
                setFirebaseErrors(error.message)
            }).finally(() => {
                setLoading(false);
            });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        registerUser()
            .then(res => {
                updateUser();
                setFirebaseData(res.user);
                alert("you are registered successfully");
                navigate("/");
            })
            .catch(error => {
                setFirebaseErrors(error.message)
            }).finally(() => {
                setLoading(false);
            });
        e.target.reset();
    }


    return (
        <div>
            <div>
                <div className="flex items-center justify-center my-20 mx-6">
                    <div className="bg-white  rounded-md overflow-hidden shadow-md">
                        <h3 className="text-center text-puerto-500 text-2xl mt-8 font-bold">SIGN UP </h3>
                        <div>
                            <div className="p-8">
                                <form onSubmit={handleRegister}>
                                    <input
                                        onChange={(e) => setSName(e.target.value)}

                                        className={`border-2  rounded-full block w-full px-4 py-3  outline-none`}
                                        type="text" placeholder="Your Name" required
                                    />

                                    <input
                                        onChange={(e) => setSEmail(e.target.value)}

                                        className={`border-2  rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="email" placeholder="Your Email" required />


                                    <input
                                        onChange={(e) => setSPass(e.target.value)}

                                        className={`border-2   rounded-full block w-full px-4 py-3 mt-3 outline-none`} type="password" placeholder="Your password" required />

                                    {
                                        firebaseErrors && <small className="text-red-500">{firebaseErrors} </small>
                                    }

                                    <div className="my-4">
                                        <input className="w-7 h-4" type="checkbox" name="" id="terms" />
                                        <label htmlFor="terms">Accepts The <span className="text-blue-500">Terms & Condition </span> </label>
                                    </div>

                                    <button type="submit" className="px-8 mr-2 py-2 rounded-3xl bg-puerto-500 hover:bg-puerto-600  text-white shadow-lg">Sing Up </button>
                                    <p className="inline-block pb-2">Already have an account?<NavLink to="/login" className="text-puerto-500 cursor-pointer">Login </NavLink> </p>
                                </form>

                                {/*  google sign in */}
                                <div className="text-center pt-3">
                                    <h4 className="text-lg font-semibold mb-2">sign up with </h4>
                                    <button onClick={handleGoogleSignIn}> <Facebook className="text-xl" />   </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup
