'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";
import Connect from "@/components/connect";
import SpecializedSection from "@/components/specialized-section";
import TextContainer from "@/components/text-container";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24'}>

            <BgImageSection heading={'Technologies'} description={'We specialize in helping you build a team of expert developers.'}/>
            <TextContainer heading={'Technologies'} description={'Using the right technology for the right problem is our mantra. We are agile about learning new processes and tools to save time and reduce complexity'} />

            <SpecializedSection />
            <Connect />
        </div>
    );
}
