import bg from '../assets/bg.mp4'

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden px-5 md:px-10">
            <video
                src={bg}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className='w-full h-32 absolute bottom-0 z-10 left-0 bg-gradient-to-b to-black from-[#00000000]'></div>
            <div className='h-screen w-full text-white z-10 relative'>
                <div className='h-1/3 sm:h-1/2 cursor-default justify-end w-full flex flex-col sm:justify-between md:flex-row'>
                    <div className='flex sm:h-full items-center gap-1'>
                        <i class="ri-record-circle-line text-xl"></i>
                        <p className='text-4xl sm:text-6xl font-semibold'>Velaro.</p>
                    </div>
                    <div className='flex sm:h-full sm:items-end w-full sm:w-80 py-2 sm:py-10 sm:text-xl'>
                        <p>Experience the Perfect Blend of Power, Elegance, and Innovation.</p>
                    </div>
                </div>
                <div className='h-2/3 sm:h-1/2 w-full flex flex-col justify-end sm:flex-row py-4'>
                    <div className='flex flex-col items-start gap-2 sm:pt-10 cursor-default'>
                        <p className='text-lg sm:text-xl font-light'>- New Velaro ES now available.</p>
                        <p className='uppercase text-5xl md:text-7xl font-semibold'>redefining luxury & performance.</p>
                    </div>
                    <div className='flex py-10 items-end'>
                        <div className='shrink-0 h-14 bg-white text-black rounded-4xl px-4 flex items-center justify-between w-56'>
                            <p>Book for Test Drive</p>
                            <div className='w-9 h-9 rounded-full bg-black text-white flex items-center justify-center'>
                                <i class="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
