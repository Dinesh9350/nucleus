import {hireData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import HireCard from "@/components/hire-card";


interface HireSectionProps {
    heading: string;
    description: string;
}

const HireSection: React.FC<HireSectionProps>  = ({heading, description}) => {
    return (
        <div className={'w-full h-full flex flex-col justify-center items-center  '}>
            <h3 className={'font-bold text-2xl md:text-5xl text-center pt-20 w-[25rem] md:w-[50rem]'}>
                {heading}
            </h3>
            <p className={'text-center py-2 px-2'}>
                {description}
            </p>
            <div className={'flex justify-center relative'}>
                <div
                    className='h-[38rem]  w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
                </div>
                <div className={'grid sm:grid-cols-4 gap-8 px-5 md:px-36 py-12 md:py-16 z-10'}>
                    {hireData.map((item, index) => (
                        <HireCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HireSection;