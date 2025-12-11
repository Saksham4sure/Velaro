import navbar from "../data/navbar"


const Navbar = () => {
    return (
        <div className='fixed z-50 bg-gradient-to-b from-black to-[#00000000] text-white w-full flex justify-between items-center px-5 md:px-10'>
            <div className="h-22">
                <img className="h-full w-full object-cover scale-130" src="logoWhite.png" alt="Velaro" />
            </div>
            <div className="hidden sm:flex gap-10 items-center justify-center">
                <ul className="flex text-sm gap-4 tracking-wide">
                    {navbar.map((items, idx) => (
                        <li className="cursor-pointer" key={idx}>{items.title}</li>
                    ))}
                </ul>
                <div className="border cursor-pointer rounded-full w-7 h-7 flex items-center justify-center">
                    <i className="ri-user-3-line text-xl"></i>
                </div>
            </div>
            <div className="flex sm:hidden items-center gap-1 cursor-pointer bg-white text-black rounded-3xl py-1 px-2">
                <i class="ri-dashboard-horizontal-fill text-xl"></i>
                <h1>Menu</h1>
            </div>
        </div>
    )
}

export default Navbar