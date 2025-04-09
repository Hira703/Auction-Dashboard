import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const FavouriteList = ({ favourites, onRemove, totalPrice }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
      <h2 className="text-xl font-bold mb-4 border-b-2 border-gray-300 text-center"><FontAwesomeIcon icon={farHeart} className="text-gray-500 mr-4" />
 Favorite Items</h2>
      {favourites.length === 0 ? (
        <p className="text-gray-500 text-center">
          No favorites yet<br />
          Click the heart icon on any item to add it to your favorites
        </p>
      ) : (
        <ul className="space-y-2">
          {favourites.map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                {/* Item Title */}
                <p className="text-lg font-semibold">{item.title}</p>
                {/* Current Bid Price */}
                <p className="text-sm text-gray-500">${item.currentBidPrice} <span className='ml-4'>Bids:{item.bidsCount}</span></p>
              </div>
              {/* Remove Button (Cross Icon) */}
              <button
                className="btn"
                onClick={() => onRemove(item.id)}
              >
               <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Total Price */}
      <div className="mt-4 font-bold text-center">
        Total bids Amount: ${totalPrice.toString().padStart(4, '0')}
      </div>
    </div>
  );
};

export default FavouriteList;
