// "use client"
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const Header = () => {
//   const router = useRouter()
//   const handleNavigate=()=>{
//     router.push("/pricing-page")
//   }
//   return (
//     <div className='w-full bg-medium-purple relative px-[20px] py-[10px] '>
//       <div className='flex justify-between items-center'>
//         <div className='cursor-pointer'>
//             <Image onClick={()=>router.push("/")} src="/images/logo.png" alt='logo' width={54} height={54}/>
//         </div>

//         <div className='flex gap-4 items-center'>
//             <button onClick={handleNavigate} className='w-[137px] h-[40px] bg-[#202352] text-[#6e62e5] rounded-md'>
//                 Pricing Page
//             </button>
            
//             <div className='cursor-pointer'>
//             <Image src="/images/questionMark.png" alt='questionMark' width={24} height={24}  />
//             </div>
            
//             <div className='flex relative cursor-pointer'>
//             <Image src= "/images/Notification.png" alt='Notification-img' width={24} height={24}  />
//             <div className='bg-[#f9837c] w-[8px] h-[8px] rounded-[100px] absolute right-[0]' ></div>
//             </div>

//             <div className='flex items-center gap-3'>
//             <Image src= "/images/profile-img.png" alt='profile-img' width={32} height={32}  />
//             <div>
//                 <h6 className='text-[#f1f1f1]'>Solemn Captain</h6>
//                 <p className='text-[#BCBCBC] m-0'>Admin</p>
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header


"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { DiVim } from 'react-icons/di';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavigate = () => {
    router.push("/pricing-page")
  }
  return (
    <div className='w-full bg-medium-purple relative px-[20px] py-[10px]'>
      <div className='flex justify-between items-center  xs:hidden md:flex'>
        <div className='cursor-pointer'>
          <Image className='cursor-pointer' onClick={() => router.push("/")} src="/images/logo.png" alt='logo' width={54} height={54} />
        </div>

        <div className='flex gap-4 items-center'>
          <button onClick={handleNavigate} className='w-[137px] h-[40px] bg-[#202352] text-[#6e62e5] rounded-md'>
            Pricing Page
          </button>

          <div className='cursor-pointer'>
            <Image src="/images/questionMark.png" alt='questionMark' width={24} height={24} />
          </div>

          <div className='flex relative cursor-pointer'>
            <Image src="/images/Notification.png" alt='Notification-img' width={24} height={24} />
            <div className='bg-[#f9837c] w-[8px] h-[8px] rounded-[100px] absolute right-[0]' ></div>
          </div>

          <div className='flex items-center gap-3'>
            <Image className='cursor-pointer' onClick={() => router.push("/profile-page")}  src="/images/profile-img.png" alt='profile-img' width={32} height={32} />
            <div>
              <h6 className='text-[#f1f1f1]'>Solemn Captain</h6>
              <p className='text-[#BCBCBC] m-0'>Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between xs:flex md:hidden relative'>
        <div>
          <Image className='cursor-pointer' onClick={() => router.push("/profile-page")} src="/images/profile-img.png" alt='profile-img' width={40} height={40} />
        </div>
        <div>
          <Image className='cursor-pointer' onClick={() => router.push("/")} src="/images/logo.png" alt='logo' width={40} height={40} />
        </div>
        <div>
          <button className='border-none' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen === false ? <FiMenu size={30} color='#6e62e5' /> : <IoClose size={30} color='#6e62e5' />}
          </button>
        </div>
      </div>

      {menuOpen &&  
      (
        <div className='xs:flex md:hidden absolute h-[100vh] justify-center bg-[#060c22] items-center z-[999] top-[55px] right-0 w-full'>
          <ul className='flex flex-col list-none m-auto text-center h-full gap-[20px] justify-center items-center text-lg'>
            <li onClick={() => { setMenuOpen(false)}}>Notification</li>
            <li onClick={() => { setMenuOpen(false)}}>Questions</li>
            <li onClick={() => { setMenuOpen(false); router.push("/pricing-page"); }}>Pricing page</li>
          </ul>
        </div>
      )
      }
    </div>
  )
}

export default Header