import React from 'react'

const FeatureCard = ({title, desc, idx}) => {
  return (
    <div className='bg-[#151716] border border-[#222222] rounded-2xl px-5 py-4 flex flex-col gap-2'>
        <p className='rounded-full bg-[#2D2F2F] w-8 h-8 flex items-center justify-center'>{idx}</p>
        <p className='text-xl font-semibold pt-2'>{title}</p>
        <p className='text-sm text-[#959595]'>{desc}</p>
    </div>
  )
}

export default FeatureCard