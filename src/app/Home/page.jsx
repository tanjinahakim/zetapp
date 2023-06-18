import React from 'react';
import Banner from './Banner/Banner';
import TopBrand from './TopBrand/TopBrand';

const HomePage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner/>
            <TopBrand/>
        </div>
    );
};

export default HomePage;