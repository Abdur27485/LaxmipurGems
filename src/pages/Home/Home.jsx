import React from 'react';
import Advantages from '../../component/Advantages/Advantages';
import WeddingSpecial from '../../component/WeddingSpecial/WeddingSpecial';
import GoldDiamondPrices from '../../component/Gold&DiamondPrices/GoldDiamondPrices';

const Home = () => {
    return (
        <div className='space-y-[80px]'>
            <WeddingSpecial></WeddingSpecial>
            <Advantages></Advantages>
            <GoldDiamondPrices></GoldDiamondPrices>
        </div>
    );
};

export default Home;