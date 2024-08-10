import {stakeDropxsData} from "@/utils";
import WhatWeDoCard from "@/components/what-we-do-card";
import React from "react";
import SpecializedCard from "@/components/specialized-card";
import ClientCarousel from "@/components/client-carousel";

const Clients = () => {
    return (
        <div className={'w-full h-full  py-24'}>
            <h3 className={'font-bold text-orange-400  md:text-5xl text-center pb-5'}>
                What our clients says
            </h3>
            <ClientCarousel/>
        </div>
    )
}

export default Clients;