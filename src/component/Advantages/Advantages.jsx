import React from 'react';

const Advantages = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-3xl sm:text-5xl text-center mb-5'>LaxmipurGems Advantages</h2>
            <div className='bg-gray-100'>
                <div className='py-4 justify-center gap-x-24 gap-y-10 items-center px-10 flex flex-col sm:flex-row'>
                    <div>
                        <img className='w-full' src=".\refund-icon.png" alt="" />
                        <p className='text-center mt-2'>7 Days Return</p>
                    </div>
                    <div>
                        <img src=".\warranty.png" alt="" />
                        <p>7 Days Return</p>
                    </div>
                    <div>
                        <img src=".\shipping.png" alt="" />
                        <p>7 Days Return</p>
                    </div>
                    <div>
                        <img src=".\certified.png" alt="" />
                        <p>7 Days Return</p>
                    </div>
                    <div>
                        <img src=".\maintenance.png" alt="" />
                        <p>7 Days Return</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;