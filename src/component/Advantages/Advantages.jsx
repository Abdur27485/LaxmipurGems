import React from 'react';

const Advantages = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-3xl sm:text-5xl text-center mb-5'>LaxmipurGems Advantages</h2>
            <div className='bg-gray-100'>
                <div className='py-4 justify-center gap-x-24 gap-y-10 items-center px-10 flex flex-col sm:flex-row'>
                    <div>
                        <img className='mx-auto' src=".\refund-icon.png" alt="" />
                        <p className='text-center mt-2'>7 Days Return</p>
                    </div>
                    <div>
                        <img className='mx-auto' src=".\warranty.png" alt="" />
                        <p className='text-center mt-2'>1 Year Warranty</p>
                    </div>
                    <div>
                        <img className='mx-auto' src=".\shipping.png" alt="" />
                        <p className='text-center mt-2'>Free Shipping</p>
                    </div>
                    <div>
                        <img className='mx-auto' src=".\certified.png" alt="" />
                        <p className='text-center mt-2'>100% Certified</p>
                    </div>
                    <div>
                        <img className='mx-auto' src=".\maintenance.png" alt="" />
                        <p className='text-center mt-2'>Lifetime Maintenance</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;