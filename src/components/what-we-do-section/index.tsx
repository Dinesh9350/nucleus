import {stakeDropxsData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";

const WhatWeDoSection = ({heading}) => {
    return (
        <div className={'w-full h-full  '}>
            <h3 className={'font-bold text-5xl md:text-5xl text-center pt-40'}>
                {heading}
            </h3>
            <div className={'flex justify-center relative'}>
                <div className={'grid sm:grid-cols-3 gap-8 px-5 md:px-36 py-12 md:py-16 z-10'}>
                    {stakeDropxsData.map((item, index) => (
                        <WhatWeDoCard key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoSection;