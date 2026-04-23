import React from 'react';
import { toast } from 'react-toastify';
import ModelCard from './ModelCard';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () =>{
        setCarts([])
        toast.success("Payment successfull!")
    };

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
     setCarts(filteredArray)



        toast.success("Delete successfully")
    }


    return (
        <div className="p-10 max-w-7xl mx-auto">
            {/* <h2 className='text-2xl font-bold'>Your cart</h2> */}
    
                 {carts.length === 0 ? (
                 <p className="text-center text-3xl font-bold text-red-600 p-5">Oops! Your Cart is Empty</p>
                ) : (
             <>
            
            <div className='space-y-5 mt-4'>
                {
                carts.map(item => <div className='flex items-center justify-between border rounded-lg p-3' key={item.id}>
                   <div className='flex items-center gap-2'>
                     <div>
                        <img className='h-20 w-20 object-contain' src={item.image} />

                    </div>
                    <div className='grid grid-cols-1'>
                        <div>
                        <h2 className='text-xl font-bold'>{item.title}</h2>
                    </div>
                    <div className=' text-gray-500'>
                        <h2 className=''>{item.description}</h2>
                    </div>
                    </div>

                   </div>
                    <div className='flex gap-10'>
                        <div className='text-3xl font-bold'>
                        ${item.price}/month
                    </div>

                    <button onClick={()=> handleDelete(item)} className='btn rounded-full bg-red-200'>X</button>
                    </div>
                </div>)
            }
            
        </div>

        <div className=' flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl font-bold'>
            <div>Total</div>
            <div>${totalPrice}</div>
        </div>
        <button onClick={handlePayment} className="bg-blue-800 hover:bg-blue-700 transition-all py-3  rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/30 text-white text-center mt-5 w-full">
              Proceed to Checkout
            </button>
            </>
            )}
            </div>
    );
};

export default Cart;