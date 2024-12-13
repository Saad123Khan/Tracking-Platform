import CurrencyPart from '@/components/CurrencyPart'
import FollowUpTable from '@/components/FollowUpTable'
import React from 'react'

const page = () => {
    return (
        <div className='px-[20px]'>

            <div className='mt-[20px] '>
                <CurrencyPart />
            </div>
            <h4 className='my-4'>Follow up Calls</h4>
            <FollowUpTable />
        </div>
    )
}

export default page
