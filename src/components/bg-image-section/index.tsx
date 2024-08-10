import React from "react";

const BgImageSection = () => {
    return (
        <div className={'relative customBg w-full h-full py-20'}>
            <div className={'flex flex-col justify-center items-center gap-16 z-10'}>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className={' flex flex-col justify-center items-center gap-16 z-10'}>
                    <h3 className={'font-bold text-white text-5xl md:text-5xl text-center w-[55rem]'}>
                        Contact Us Today To Discuss Your Project
                    </h3>
                    <button className={'bg-[#44CEF6] text-white text-lg font-bold py-3 px-4 rounded-lg'}>Get
                        Consultation
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BgImageSection;