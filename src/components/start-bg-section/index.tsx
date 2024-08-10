import React from "react";

const StartBgSection = () => {
    return (
        <div className={'px-28 pt-20'}>
            <div className={'relative customBg w-full h-full py-32  rounded-tr-xl rounded-bl-3xl'}>
                <div className={'flex flex-col justify-center items-center gap-16 z-10'}>

                    <div
                        className={'absolute top-0 left-0 flex flex-col justify-center items-start gap-4 z-10 pt-10'}>
                        <h2 className={'font-bold text-white text-5xl md:text-5xl text-center w-[20rem]'}>
                            100+
                        </h2>
                        <h3 className={'font-bold text-white text-3xl md:text-3xl text-center w-[20rem]'}>
                            Developers
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartBgSection