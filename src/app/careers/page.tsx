'use client'

import ContactUsSection from "@/components/contact-us-section";

import React from "react";
import BgImageSection from "@/components/bg-image-section";


export default function Home() {

    return (
        <div className={'h-full w-full bg-gray-100 pt-24'}>

            <BgImageSection heading={'Our Services'} description={'We specialize in helping you build a team of expert developers.'}/>

        </div>
    );
}
