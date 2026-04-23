import { useState } from 'react';
import { toast } from 'react-toastify';



const ModelCard = ({model, carts, setCarts}) => {
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscription = () => {
        setIsSubscribed(true)
        const isFound = carts.find((item) => item.id === model.id)
                if(isFound){
                    toast.error("Item already in cart!");
                    return
                }
        
        setCarts([...carts, model])
        toast.success("Item added to cart!")
    }

    const getStatusStyle = (status) => {
  switch (status) {
    case "🔥popular":
      return "bg-gradient-to-r from-red-400 to-pink-400 text-white";
    case "💜favourite":
      return "bg-gradient-to-r from-purple-400 to-indigo-400 text-white";
    case "⭐most-wanted":
      return "bg-gradient-to-r from-yellow-300 to-orange-300 text-black";
    default:
      return "bg-gradient-to-r from-yellow-300 to-orange-300 text-black";
  }
};
    return (
       <div className='shadow-lg rounded-lg overflow-hidden '>
           <div className='relative flex justify-center items-center h-56 bg-blue-50'>
           <div className={`absolute top-3 right-3 px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(model.status)}`}>
            {model.status}
            </div>
            <img className='h-40 w-40 object-contain' src={model.image} />

           </div>
           <div className='p-4 space-y-3'>
            <h2 className='text-2xl font-bold'>{model.title}</h2>
            <p>{model.description}</p>
            <div className='text-2xl font-bold'>${model.price}/month</div>
           <button onClick={handleSubscription} className='btn w-full text-white rounderd-lg mt-5 bg-blue-900 hover:bg-blue-800 transition-all px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/30'>{isSubscribed ? "Subscribed" : "Subscribe Now"}</button>
           </div>
            </div>
    );
  };
  

export default ModelCard;