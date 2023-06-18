import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
const TopBrand = () => {
    return (
        <section className='text-center my-20'>
            <div>
            <h2 className='text-3xl font-bold'>Top Brands on ZET</h2>
            <p className='text-2xl'>We are trusted by best brand in the country</p>
            </div>
            <div className='mt-10'>
            <Marquee>
                <Image src='/images/TopBrand/Aufin.png' alt='brand' width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/Axis.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/Bajaj.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/BOB.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/Icici.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/Idfc.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/IndusInd.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/StandardChartered.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
                <Image src='/images/TopBrand/YesBank.png' alt='brand'  width={200} height={100} className='border-2 mr-8 p-5'></Image>
            </Marquee>
            </div>
        </section>
    );
};

export default TopBrand;