'use client';
import React from 'react';
import Image from 'next/image';




const SpecializedCard = ({data}: any) => {
    return (
        <div className={'bg-white h-full w-full lg:w-[24rem] rounded-3xl p-6 '}>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'}>
                <Image className={'m-auto'} src={data?.image} alt="photo" width={80} height={80}/>
                <p className={'text-2xl  font-bold'}>{data?.heading}</p>
                {/*<p className={'text-lg py-2'}>{data?.description}</p>*/}
            </div>
        </div>
    );
};

export default SpecializedCard;
