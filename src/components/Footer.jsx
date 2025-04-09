import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-center p-6 border-t border-blue-400">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold">
          <span className="text-blue-600">Auction</span>
          <span className="text-yellow-500">Gallery</span>
        </h2>
        <p className="text-gray-700 mt-1 tracking-wider">Bid. Win. Own.</p>
      </div>

      <nav className="flex justify-center gap-6 text-sm font-medium text-gray-600 my-3">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Auctions</a>
        <a href="#" className="hover:text-blue-600">Categories</a>
        <a href="#" className="hover:text-blue-600">How to works</a>
      </nav>

      <p className="text-xs text-gray-500 mt-4">&copy; 2025 AuctionHub. All rights reserved.</p>
    </footer>
        </div>
    );
};

export default Footer;