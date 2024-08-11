import {specializeData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import SpecializedCard from "@/components/specialized-card";

const SpecializedSection = () => {
    return (
        <div className={'w-full h-full bg-white pt-20 pb-10 '}>
            <h3 className={'font-bold text-orange-400 text-2xl  md:text-5xl text-center'}>
                Specialized Staff We Provide
            </h3>
            <p className={'text-center py-2 px-2'}>
                From full-time remote engineering teams to hourly contractors, work with remote devs as needed
            </p>
            <div className={'flex justify-center relative'}>
                <div
                    className='h-[38rem]  w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                </div>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-5 md:px-10 xl:px-36 py-12 md:py-16 z-10'}>
                    {specializeData.map((item, index) => (
                        <SpecializedCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecializedSection;