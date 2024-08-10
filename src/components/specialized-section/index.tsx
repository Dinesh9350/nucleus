import {stakeDropxsData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import SpecializedCard from "@/components/specialized-card";

const SpecializedSection = () => {
    return (
        <div className={'w-full h-full  '}>
            <h3 className={'font-bold text-orange-400  md:text-5xl text-center pt-60'}>
                What we do
            </h3>
            <p>
                From full-time remote engineering teams to hourly contractors, work with remote devs as needed
            </p>
            <div className={'flex justify-center relative'}>
                <div
                    className='h-[38rem]  w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                </div>
                <div className={'grid sm:grid-cols-3 gap-8 px-5 md:px-36 py-12 md:py-16 z-10'}>
                    {stakeDropxsData.map((item, index) => (
                        <SpecializedCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecializedSection;