import React from 'react';
import Advantages from '../../component/Advantages/Advantages';
import WeddingSpecial from '../../component/WeddingSpecial/WeddingSpecial';

const Home = () => {
    return (
        <div className='space-y-[80px]'>
            <WeddingSpecial></WeddingSpecial>
            <Advantages></Advantages>
        </div>
    );
};

export default Home;