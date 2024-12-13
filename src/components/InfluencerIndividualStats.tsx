import React from 'react'
import Image from 'next/image'

const InfluencerIndividualStats = () => {
    return (
        <div className=' flex justify-between gap-[20px] xs:flex-col md:flex-row'>

            <div className=' flex flex-col gap-5 xs:w-[100%] md:w-[50%]'>

                <div className='flex gap-3 xs:flex-col sx:flex-row'>

                    <div className='rounded-lg border-[#222453] border-[1px] flex flex-col items-center p-3 bg-[#111736]'>
                        <Image src="/images/statenew1.png" height={80} width={80} alt="" />
                        <h5 className='md:text-[12px] lg:text-[16px]'>@IncomeSharks</h5>
                        <p className='xs:text-[12px] lg:text-[12px] md:text-[9px] text-[#666979]'>@IncomeSharks</p>
                    </div>

                    <div className='rounded-lg w-full border-[#222453] border-[1px] md:gap-1 gap-3 lg:gap-3 flex items-center p-2 bg-[#111736]'>

                        <div>
                            <Image src="/images/statenew2.png" className='md:w-[140px] lg:w-[180px]' height={140} width={180} alt="" />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='lg:text-[14px] md:text-[10px] sx:text-[12px] xs:text-[12px]'>Market Cap of Calls</p>

                            <div className='flex items-center gap-2'>
                                <div className='bg-[#ffc904] h-[7px] w-[7px] rounded-[50%]'></div>
                                <p className='lg:text-[12px] md:text-[7px] sx:text-[10px] xs:text-[9px] text-[#a5a8b3]'>Under $1m </p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='bg-[#09da5a] h-[7px] w-[7px] rounded-[50%]'></div>
                                <p className='lg:text-[12px] md:text-[7px] sx:text-[10px] xs:text-[9px] text-[#a5a8b3]'>Over $1m (&lt; $50m)</p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='bg-[#6e62e5] h-[7px] w-[7px] rounded-[50%]'></div>
                                <p className='lg:text-[12px] md:text-[7px] sx:text-[10px] xs:text-[9px] text-[#a5a8b3]'>Over $50m</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="gap-3 flex">
                    <div className='w-full xs:p-3 md:p-1 lg:p-3 flex xs:flex-col sx:flex-row rounded-lg border-[#222453] border-[1px] bg-[#111736] gap-2 items-center'>
                        <div>
                            <Image src='/images/stats1.png' height={20} width={50} alt='' />
                        </div>
                        <div>
                            <h4 className='md:text-[13px] lg:text-[20px]'>250k</h4>
                            <p className='lg:text-[12px] md:text-[7px] xs:text-[12px] text-[#666979]'>Followers</p>
                        </div>
                    </div>

                    <div className='w-full flex p-3 rounded-lg border-[#222453] xs:flex-col sx:flex-row border-[1px] bg-[#111736] gap-2 items-center xs:text-center sx:text-start'>
                        <div>
                            <Image src='/images/average.png' width={50} height={20} alt='' />
                        </div>
                        <div>
                            <h4 className='md:text-[13px] lg:text-[20px]'>5.5x</h4>
                            <p className='lg:text-[12px] md:text-[7px] xs:text-[12px] text-[#666979]'>Average Xs</p>
                        </div>
                    </div>

                    <div className='w-full flex p-3 rounded-lg border-[#222453] xs:flex-col sx:flex-row border-[1px] bg-[#111736] gap-2 items-center xs:text-center sx:text-start'>
                        <div>
                            <Image src='/images/Rectangle.png' height={20} width={50} alt='' />
                        </div>
                        <div>
                            <h4 className='md:text-[13px] lg:text-[20px]'>79</h4>
                            <p className='lg:text-[12px] md:text-[7px] xs:text-[12px] text-[#666979]'>Number of calls</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className=' flex gap-5 flex-col xs:w-[100%] md:w-[50%]'>

                <div className='flex gap-3 xs:flex-col sx:flex-row'>
                    <div className='w-full gap-2 rounded-lg border-[#222453] border-[1px] flex xs:flex-row sx:flex-col p-3 bg-[#111736] xs:items-center sx:items-start'>
                        <div>
                            <Image src="/images/lock-img.png" height={40} width={50} alt="" />
                        </div>
                        <div>
                            <h5 className='md:text-[14px] lg:text-[16px]'>$75,120</h5>
                            <p className='lg:text-[12px] md:text-[8px] xs:text-[12px] text-[#666979]'>Average buy volume per call </p>
                        </div>
                    </div>

                    <div className='w-full gap-2 rounded-lg border-[#222453] border-[1px] flex xs:flex-row sx:flex-col p-3 bg-[#111736] xs:items-center sx:items-start'>
                        <div>
                            <Image src="/images/dollar-img.png" height={40} width={50} alt="" />
                        </div>
                        <div>
                            <h5 className='md:text-[14px] lg:text-[16px]'>$89,575</h5>
                            <p className='lg:text-[12px] md:text-[8px] xs:text-[12px] text-[#666979]'>Highest buy volume</p>
                        </div>
                    </div>

                    <div className='w-full sx:py-3 xs:py-3 md:py-5 gap-2 rounded-lg border-[#222453] border-[1px] flex xs:flex-row sx:flex-col p-3 bg-[#111736] xs:items-center sx:items-start'>
                        <div>
                            <Image src="/images/achieve.png" height={40} width={50} alt="" />
                        </div>
                        <div>
                            <h5 className='md:text-[14px] lg:text-[16px]'>30x</h5>
                            <p className='lg:text-[12px] md:text-[8px] xs:text-[12px] text-[#666979]'>Best Call</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 sx:flex-row xs:flex-col'>
                    <div className='w-full flex xs:p-3 md:p-2 lg:p-3 rounded-lg border-[#222453] border-[1px] bg-[#111736] gap-2 items-center'>
                        <div>
                            <Image src='/images/statenew3.png' height={40} width={50} alt='' />
                        </div>
                        <div>
                            <h4 className='sx:text-[16px] xs:text-[16px] md:text-[12px] lg:text-[20px]'>$45,563 - $M87</h4>
                            <p className='sx:text-[8px] lg:text-[12px] md:text-[7px] xs:text-[10px] text-[#666979]'>Highest Volume on a Follow Up call</p>
                        </div>
                    </div>

                    <div className='w-full flex xs:p-3 md:p-2 lg:p-3 rounded-lg border-[#222453] border-[1px] bg-[#111736] gap-2 items-center'>
                        <div>
                            <Image src='/images/statenew4.png' height={40} width={50} alt='' />
                        </div>
                        <div>
                            <h4 className='sx:text-[16px] xs:text-[16px] md:text-[12px] lg:text-[20px]'>$13,500</h4>
                            <p className='sx:text-[8px] lg:text-[12px] md:text-[7px] xs:text-[10px] xs:text-[12px] text-[#666979]'>Average Volume on Follow up Calls</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfluencerIndividualStats