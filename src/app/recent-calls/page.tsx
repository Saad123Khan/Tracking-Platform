import CallsTable from '@/components/CallsTable'
import CurrencyPart from '@/components/CurrencyPart'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const page = () => {
  return (

      <div className='mt-[20px] px-[20px]'>
        <CurrencyPart />

        <div className='mt-[20px] flex justify-between'>
          <h4>Recent Calls</h4>
          <div className="flex items-center gap-1 bg-[#1d214d] rounded-md w-[172px] h-[40px] px-[10px] border border-[#383838]">
            <CiSearch />
            <input
              type="text"
              className=" outline-none border-none bg-transparent w-full"
              placeholder="search..."
            />
          </div>
        </div>

        <div>
          <CallsTable height="500px" />
        </div>
     
      </div>

  )
}

export default page
