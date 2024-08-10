import Image from "next/image";
import React from "react";

const Trust = () => {
    return (
        <div className={'absolute bottom-[-12%]   px-5 md:px-36'}>
            <div className={'m-auto  bg-white w-full  py-10 rounded-lg px-32 '}>
                <h3 className={'font-bold text-orange-400 text-5xl md:text-4xl text-center pb-5'}>
                    Amazing clients who trust us
                </h3>
                <div className={'flex justify-center items-center gap-40'}>
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