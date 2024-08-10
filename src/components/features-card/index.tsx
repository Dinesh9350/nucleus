import {stakeDropxsData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";

const FeaturesCard = () => {
    return (
        <div className={'w-full h-full  '}>
            <h3 className={'font-bold text-5xl md:text-5xl text-center pt-60'}>
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
                        <WhatWeDoCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturesCard;