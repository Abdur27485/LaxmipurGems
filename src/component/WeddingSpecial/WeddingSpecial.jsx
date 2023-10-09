import React from 'react';

const WeddingSpecial = () => {
    return (
        <div className='px-4 max-w-screen-xl mx-auto mt-[80px]'>
            <h2 className='font-semibold text-5xl text-center mb-5'>
                <span className='font-thin'>Wedding </span>
                Special
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
                <div className='space-y-2 text-center text-2xl'>
                    <img src=".\engagement.jpg" className="cursor-pointer" />
                    <p>Engagement Rings</p>
                </div>
                <div className='space-y-2 text-center text-2xl'>
                    <img src=".\necklace.webp" className="cursor-pointer" />
                    <p>Priceless Necklace</p>
                </div>
                <div className='space-y-2 text-center text-2xl'>
                    <img src=".\platinum.webp" className="cursor-pointer" />
                    <p>Platinum Collection</p>
                </div>
            </div>
        </div>
    );
};

export default WeddingSpecial;