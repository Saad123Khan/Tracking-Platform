import InfluencerIndividualStats from '@/components/InfluencerIndividualStats'
import InfluencersIndividualTable from '@/components/InfluencersIndividualTable'
import React from 'react'

const page = () => {
  return (
    <div className='px-[20px] mt-[20px]'>
        <div>
        <h4 className='mb-[20px]'>Influencer individual stats</h4>
        <InfluencerIndividualStats/>
        </div>
      <div className='mt-[20px]'>
        <h4> Last 20 calls</h4>

        <div className='mt-[20px]'>
            <InfluencersIndividualTable/>
        </div>
      </div>
    </div>
  )
}

export default page
