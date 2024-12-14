import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[40px] px-[20px] mb-2'>
      <div className='flex items-center justify-between'>
            <div>
                <Image src={"/images/logo.png"} alt='logo' width={35} height={35}/>
            </div>

            <div className='flex gap-3 items-center'>
                <Image src={"/images/twitter.png"} alt='twitter' width={30} height={30}/>
                <Image src={"/images/telegram.png"} alt='telegram' width={30} height={30}/>
                <Image src={"/images/footer-icon3.png"} alt='footer-icon3' width={30} height={30}/>
                <Image src={"/images/footer-icon4.png"} alt='footer-icon4' width={30} height={30}/>
                <Image src={"/images/footer-icon5.png"} alt='footer-icon5' width={30} height={30}/>
            </div>
      </div>
    </div>
  )
}

export default Footer