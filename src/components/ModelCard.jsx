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
      return "bg-red-500 text-white";
    case "💜favourite":
      return "bg-orange-500 text-white";
    case "⭐most-wanted":
      return "bg-yellow-700 text-white";
    default:
      return "bg-yellow-500 text-white";
  }
};
    return (
       <div className='shadow-lg rounded-lg overflow-hidden '>
           <div className='relative flex justify-center items-center h-56 bg-zinc-200'>
           <div className={`absolute top-3 right-3 px-4 py-1 rounded-full text-sm font-semibold ${getStatusStyle(model.status)}`}>
            {model.status}
            </div>
            <img className='h-40 w-40 object-contain' src={model.image} />

           </div>
           <div className='p-4 space-y-3'>
            <h2 className='text-2xl font-bold'>{model.title}</h2>
            <p>{model.description}</p>
            <div className='text-2xl font-bold'>${model.price}/month</div>
           <button onClick={handleSubscription} className='btn w-full bg-red-500 text-white rounderd-lg mt-5'>{isSubscribed ? "Subscribed" : "Subscribe Now"}</button>
           </div>
            </div>
    );
  };
  

export default ModelCard;