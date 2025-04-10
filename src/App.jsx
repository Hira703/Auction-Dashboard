import { useEffect, useState } from 'react'
import './App.css'
import AuctionItem from './components/AuctionItem'
import FavouriteList from './components/FavouriteList'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer'

function App() {
  const [items,setItems]=useState([])
  const [favourites,setFavourites]=useState([])

  useEffect(() => {
    const handleItems = async () => {
      const res = await fetch('/items.json');
      const data = await res.json();
      setItems(data);
      console.log(data);
    };
    
    handleItems();
  }, []);
  const handleAddToFavourites=(item)=>{
    setFavourites([...favourites,item]);
    toast.success(`${item.title} added to favorites!`);
  }
  const handleRemoveFavourite = (id) => {
    setFavourites(favourites.filter((item) => item.id !== id));
    toast.error(`Item removed from favorites.`);
  };
const totalPrice=favourites.reduce((total,item)=>total+item.currentBidPrice,0)
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <div className='bg-gray-200 p-10'>
    <h1 className="text-3xl font-bold text-left px-4 md:px-12 mb-4 text-black ">Active
Auctions
        </h1> 
        <p className='text-left px-4 md:px-12 mb-8 text-gray-500'>Discover and bid on extraordinary items</p>
        <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12 mt-8 ">
        <div className="w-full md:w-2/3 overflow-x-auto rounded-lg">
          <table className="table w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-base-200 text-base font-semibold">
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <AuctionItem
                  key={item.id}
                  item={item}
                  onAdd={handleAddToFavourites}
                  isFavorited={favourites.some((fav) => fav.id === item.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <FavouriteList
          favourites={favourites}
          onRemove={handleRemoveFavourite}
          totalPrice={totalPrice}
        />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />

</div></div>
<Footer></Footer>
     
    </>
  )
}

export default App
