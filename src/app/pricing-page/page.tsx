import React from 'react'
import Image from 'next/image';


export default function Card() {
    return (
        <div className="h-[100vh] w-full flex justify-center text-center mt-[20px]  items-center gap-5 px-[20px]">
            
            <div className="md:w-[306px] w-[206px] gap-[10px] h-[400px] p-5 bg-[#111736] rounded-2xl border-[#48429d] border-2 flex flex-col justify-between" >
                <h3 className="text-white text-center font-semibold">Basic</h3>
                <p className="text-white text-center">Free</p>

                <div className="h-[1px] bg-[#1B2451] " />

                <div className="flex flex-col gap-5">

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/close.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/close.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/close.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                </div>

                <button className="bg-[#6e62e5] w-full rounded p-2 text-white">Choose this plan</button>
            </div>

            <div className="w-[356px] h-[460px] p-5 bg-[#4e42c6] rounded-2xl border-[#48429d] border-2 flex flex-col justify-between" >
                <h3 className="text-white text-center font-semibold">Premium</h3>
                <p className="text-white text-center text-lg">0.1 ETH <span className='text-[#a6a0e3] text-xs'>/month</span></p>

                <div className="h-[1px] bg-[#ffff] " />

                <div className="flex flex-col gap-5">

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check-white.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check-white.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/close.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check-white.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/close.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check-white.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                </div>

                <button className="bg-[#6e62e5] w-full rounded p-2 text-white">Choose this plan</button>
            </div>

            <div className="w-[306px] h-[400px] p-5 bg-[#111736] rounded-2xl border-[#48429d] border-2 flex flex-col justify-between" >
                <h3 className="text-white text-center font-semibold">Premium +</h3>
                <p className="text-white text-center text-lg">0.25 ETH <span className='text-[#a6a0e3] text-xs'>/month</span></p>


                <div className="h-[1px] bg-[#1B2451] " />

                <div className="flex flex-col gap-5">

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <div>
                            <Image alt="img" src={"/images/check.png"} height={18} width={18} />
                        </div>
                        <p className="text-white text-sm">Create personal dashboard.</p>
                    </div>

                </div>

                <button className="bg-[#6e62e5] w-full rounded p-2 text-white">Choose this plan</button>
            </div>

        </div>
    )
}