import React from 'react'
import FeatureCard from '../components/FeatureCard'
import Title from '../components/Title';

const featureData = [
    {
        title: "Dynamic Performance",
        desc: "The Lexus ES delivers a powerful yet smooth driving experience with precision-engineered performance."
    },
    {
        title: "Dynamic Performance",
        desc: "The Lexus ES delivers a powerful yet smooth driving experience with precision-engineered performance."
    },
    {
        title: "Dynamic Performance",
        desc: "The Lexus ES delivers a powerful yet smooth driving experience with precision-engineered performance."
    },
];

const SecondHero = () => {
    return (
        <div className='w-full px-5 md:px-10  flex flex-col py-10'>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col md:w-2/3 gap-3'>
                    <div className='text-xs border rounded-3xl w-30 py-1 flex items-center justify-center'>
                        <h1>&bull; Our Car Feature</h1>
                    </div>
                    <div>
                        <h1 className='text-3xl sm:text-5xl font-semibold'>LUXURY PERFORMANCE & INNOVATION</h1>
                    </div>
                </div>
                <div className='md:w-1/3 flex items-end text-sm text-[#959595]'>
                    <p>
                        Experience the perfect balance of elegance and power with the Lexus ES. Designed for those who seek premium comfort, cutting-edge technology, and exhilarating performance in every drive.
                    </p>
                </div>
            </div>
            <div className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-4 lg:gap-10 pt-10'>
                {
                    featureData.map(({ title, desc }, idx) => (
                        <FeatureCard key={idx} title={title} desc={desc} idx={idx + 1} />
                    ))
                }
            </div>
            <div className='flex items-center justify-center'>
                <img className='' src="https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?cs=srgb&dl=pexels-pixabay-261985.jpg&fm=jpg" alt="car" />
            </div>
            <div className='flex flex-col pt-10 md:pt-0'>
                <Title title="OUR ADVANTAGE" desc="Experience class-leading comfort, cutting-edge technology, and exceptional reliability with the Lexus ES. Designed to elevate every journey with confidence and style." />
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 flex items-start justify-center flex-col pt-10 gap-5'>
                        <div className='flex border rounded-3xl w-60 py-px px-px'>
                            <h1 className='w-1/3 border rounded-3xl flex items-center justify-center bg-white text-black'>Engine</h1>
                            <h1 className='w-1/3 rounded-3xl flex items-center justify-center'>Motor</h1>
                            <h1 className='w-1/3 rounded-3xl flex items-center justify-center'>Battery</h1>
                        </div>
                        <div className='md:pr-21 flex flex-col gap-5'>
                            <h1 className='text-3xl sm:text-5xl font-semibold'>REFINED ACCELERATION WITH INTELLIGENT CONTROL</h1>
                            <p className='text-sm text-[#959595]'>Experience class-leading comfort, cutting-edge technology, and exceptional reliability with the Lexus ES. Designed to elevate every journey with confidence and style.</p>
                        </div>
                        <div className='shrink-0 h-14 cursor-pointer bg-white text-black rounded-4xl px-4 flex items-center justify-between w-40'>
                            <p>Test Drive</p>
                            <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center'>
                                <i class="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex items-center justify-center'>
                        <img src="https://img.freepik.com/premium-photo/closeup-view-car-engine-black-background-perfect-automotiverelated-uses_153912-338633.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondHero