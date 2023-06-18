'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner = () => {
    useEffect(() => {
        AOS.init({
        });
      }, []);
  return (
 
         <div className='grid md:grid-cols-2 bg-blue-50' data-aos="fade-up" data-aos-duration="3000">
      <div className='my-24 ml-14'>
        <h1 className='text-5xl font-bold'>
          Become a Financial Advisor and <span className='text-blue-600'>Earn Rs.1 Lakh/Month</span>
        </h1>
        <p className='my-8 text-3xl'>No investment required</p>
        <div>
          <Image src='/images/banner/google_button.svg' alt='banner' width={200} height={200} className='btn bg-transparent border-none' />
        </div>
      </div>
      <div className='absolute -top-5 right-3'>
        <Image src='/images/banner/HeroImgNew.png' alt='banner' width={500} height={100}/>
      </div>
      
    </div>
  );
};

export default Banner;
