'use client';
import React from 'react';
import Image from 'next/image';


const HomeSection = () => {
    return (
        <>
            <div className="bg-gray-50 h-full overflow-hidden px-5 md:px-10 xl:px-36 pt-48 md:pt-36 pb-40">
                <div className={'relative flex flex-col md:flex-row justify-end items-center w-full h-full'}>
                    <div
                        className={'md:absolute flex flex-col gap-4 p-8 bg-white w-full md:w-[40rem] left-0 self-center rounded-xl borderTopRight z-10'}>
                        <h3 className={'font-bold text-2xl md:text-5xl'}>
                            Custom Software Solutions for Business Leaders
                        </h3>
                        <p className={'text-lg'}>
                            We specialize in creating custom software solutions that solve complex business challenges
                            for small to mid-sized businesses. With a combination of US-based management and offshore
                            development expertise, we deliver top-notch services that maximize your ROI.
                        </p>
                        <button className={'bg-[#44CEF6] text-white px-4 py-3 rounded-md w-[10rem]'}>Build a Team
                        </button>
                    </div>
                    <div className={'hidden md:block w-[100%]'}>
                        <Image className={'my-auto float-right '} width={750}
                               height={200} src={'/images/hero-img.png'}
                               alt={'home image'}/>
                    </div>
                </div>


            </div>

        </>
    );
};

export default HomeSection;
