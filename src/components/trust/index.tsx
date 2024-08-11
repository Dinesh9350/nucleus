import Image from "next/image";
import React from "react";

const Trust = () => {
    return (
        <div className={'hidden md:block absolute bottom-[-12%]  px-5 md:px-10 xl:px-36'}>
            <div className={'m-auto  bg-white w-full  py-10 rounded-lg px-32 '}>
                <h3 className={'font-bold text-orange-400 text-3xl md:text-4xl text-center pb-5'}>
                    Amazing clients who trust us
                </h3>
                <div className={'flex flex-col md:flex-row justify-center items-center gap-40 h-full'}>
                    <Image src={'/images/clientLogo.png'} height={100} width={100} alt={'clientLogo'}/>
                    <Image src={'/images/clientLogo.png'} height={100} width={100} alt={'clientLogo'}/>
                    <Image src={'/images/clientLogo.png'} height={100} width={100} alt={'clientLogo'}/>
                    <Image src={'/images/clientLogo.png'} height={100} width={100} alt={'clientLogo'}/>
                    <Image src={'/images/clientLogo.png'} height={100} width={100} alt={'clientLogo'}/>
                </div>
            </div>
        </div>
    )
}

export default  Trust;