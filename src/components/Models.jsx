import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelPromise, carts, setCarts }) => {
    const models = use(modelPromise);
    console.log(models)
   
    return (
        <div className='py-20 max-w-7xl mx-10 lg:mx-30'>
           <div className='text-center'>
             <h2 className='text-5xl font-bold'>Choose Your AI Model</h2>
            <p>One Subscription gives you access to all frontier AI models</p>
           </div>

           <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 mt-10'>
            {models.map((model) => (

                <ModelCard key={model.id} model={model} carts = {carts} setCarts ={setCarts}/>

            ))}
           </div>
        </div>
    );
};

export default Models;