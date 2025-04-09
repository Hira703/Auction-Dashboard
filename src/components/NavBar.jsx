import React from 'react';

const NavBar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-3xl text-blue-400 font-bold">
                        Auction <span className="text-yellow-300">Gallery</span>
                    </h1>
                </div>

                {/* Navbar Links Section */}
                <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-lg font-semibold hover:text-blue-500 transition duration-200">Home</a></li>
                        <li><a href="#" className="text-lg font-semibold hover:text-blue-500 transition duration-200">Auctions</a></li>
                        <li><a href="#" className="text-lg font-semibold hover:text-blue-500 transition duration-200">Categories</a></li>
                        <li><a href="#" className="text-lg font-semibold hover:text-blue-500 transition duration-200">How to work</a></li>
                    </ul>
                </div>

                {/* Icons and Avatar Section */}
                <div className="flex items-center space-x-4">
                    {/* Notification Bell Icon */}
                    <div className="flex items-center space-x-2">
                        <div className="btn btn-ghost btn-circle">
                            <div className="indicator  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zm6-6V9c0-3.314-2.686-6-6-6S6 5.686 6 9v7l-2 2v1h16v-1l-2-2z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">5</span> {/* Notification count */}
                            </div>
                        </div>
                        {/* <span className="text-lg font-semibold">Notifications</span> */}
                    </div>

                    {/* Avatar Image */}
                    <div className="w-10 ">
                        <img alt="Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='rounded-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
