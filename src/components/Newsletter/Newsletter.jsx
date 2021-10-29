import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter my-24">
            <div className="container h-72 mx-auto px-36 flex items-center justify-between">
                <div>
                    <h3 className="text-3xl font-semibol2d text-white mb-4">Subscribe Our Newsletter </h3>
                    <span className="text-white text-lg">Subscribe newsletter to get offers and <br /> about new places to discover. </span>
                </div>
                <div className="ml-10">
                    <form>
                        <input className="outline-none px-6 py-3 w-96 mr-10 rounded-md" type="text" placeholder="your Email address" />
                        <input onClick={(e) => e.preventDefault() } className="bg-crimson-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-puerto-600" type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;