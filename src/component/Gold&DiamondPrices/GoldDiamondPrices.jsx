import React from 'react';

const GoldDiamondPrices = () => {
    return (
        <div className='my-[80px] px-5 flex-wrap sm:flex-nowrap items-center justify-center flex gap-5 max-w-xl mx-auto'>
            <div className=''>
                <h3 className='text-3xl text-center mb-5'>Today's Gold Price</h3>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>22 KDM CREATE GOLD (PER GRAM)</span>
                    <span>8,420.00 BDT</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>SONATON  KDM CREATE GOLD (PER GRAM)</span>
                    <span>5,740.00 BDT</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>18  KDM CREATE GOLD (PER GRAM)</span>
                    <span>6,890.00 BDT</span>
                </p>
            </div>

            <div className=''>
                <h3 className='text-3xl text-center mb-5'>Today's Diamond Price</h3>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>0.2 Grams</span>
                    <span>BDT 79,141.31</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>100 Milligram</span>
                    <span>BDT 7,914.13</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>1/4 Carat</span>
                    <span>BDT 19,785.33</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>1/2 Carat</span>
                    <span>BDT 39,570.65</span>
                </p>
                <p className='flex justify-between p-2 rounded-md bg-[#ffdee9] mb-2 gap-5'>
                    <span>1 Carat</span>
                    <span>BDT 79,141.31</span>
                </p>
            </div>

        </div>
    );
};

export default GoldDiamondPrices;