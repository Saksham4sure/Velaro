import React from 'react'

const Title = ({ title, desc }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-5'>
            <div className='flex flex-col md:w-1/4 gap-3'>
                <div>
                    <h1 className='text-3xl sm:text-5xl font-semibold'>{title}</h1>
                </div>
            </div>
            <div className='md:w-1/3 flex items-end justify-end text-sm text-[#959595]'>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Title