import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';   

const AuctionItem = ({ item, onAdd, isFavorited }) => {
  return (
    <tr className="hover">
      <td className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded" />
        {item.title}
      </td>
      <td>${item.currentBidPrice}</td>
      <td>{item.timeLeft}</td>
      <td>
        <button
          className={`text-xl ${isFavorited ? 'cursor-not-allowed  text-red-600' : 'text-gray-400'}`}
          onClick={() => onAdd(item)}
          disabled={isFavorited}
        >
          <FontAwesomeIcon icon={isFavorited ? fasHeart : farHeart} />
        </button>
      </td>
    </tr>
  );
};

export default AuctionItem;
